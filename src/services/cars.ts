import axios, { AxiosError } from 'axios';
import { Car, DefaultCarFilters, FoundCar } from '../interfaces';

export const getFilteredCars = async (filters: DefaultCarFilters): Promise<FoundCar[]> => {
  console.log('fetching cars...', filters);
  
  try {
    const response = await axios.post<FoundCar[]>(`/api/cars/`, filters);    
    return response.data;
  } catch (error) {
    throw new AxiosError((error as Error).stack);
  }
};

export const getOneFBCar = async (url: string): Promise<Car> => {
  console.log('fetching a Facebook car...', url);

  try {
    const response = await axios.post<FoundCar>(`/api/facebook/`, { url });
    return response.data;
  } catch (error) {
    throw new AxiosError((error as Error).stack);
  }
}

export const getOneCLCar = async (url: string): Promise<Car> => {
  console.log('fetching a Craigslist car...', url);

  try {
    const response = await axios.post<FoundCar>(`/api/craigslist/`, { url });
    return response.data;
  } catch (error) {
    throw new AxiosError((error as Error).stack);
  }
}

/* export const getAIInfo = async (data: Car): Promise<string> => {
  try {
    const response = await axios.post(`/api/ai-info2/`, { data }, {
      headers: {
        'Content-Type': 'application/json',
      },
      responseType: 'stream',
      onDownloadProgress: (progressEvent) => {
        const data = progressEvent.event.target.responseText;
        const lines = data
          .split('\n')
          .filter((line: string) => line.startsWith('data: '))
          .map((line: string) => line.slice(6));

        let newText = '';
        for (const line of lines) {
          if (line === '[DONE]') continue;
          try {
            const text = JSON.parse(line);
            newText += text;
          } catch (e) {
            console.error('Error parsing JSON:', e);
          }
        }
        return newText;
      }
    });
    console.log('response', response);
    
    return response.data.text;
  } catch (error) {
    throw new AxiosError((error as Error).stack);
  }
} */