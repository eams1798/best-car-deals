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

export const getAICarInfo = async (data: Car, fn: (value: React.SetStateAction<string>) => void): Promise<void> => {
  try {
    await axios.post(`/api/ai-info/`, { data }, {
      headers: {
        'Content-Type': 'application/json',
      },
      responseType: 'stream',
      onDownloadProgress: (progressEvent) => {
        const aiText = progressEvent.event.target.responseText;
        let newText = '';
        let line = '';
        for (const char of aiText) {
          try {
            line += char;
            if (line.startsWith('data: "') && line.endsWith('"\n\n')) {
              
              line = line.slice(7, -3).replace(/\\n/g, '\n');
              console.log('AI response:', line);
              newText += line;
              line = '';
            }
          } catch (e) {
            console.error('Error parsing JSON:', e);
          }
        }
        fn(newText);
      }
    });

  } catch (error) {
    throw new AxiosError((error as Error).stack);
  }
}