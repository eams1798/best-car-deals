import axios, { AxiosError } from 'axios';
import { Car, DefaultCarFilters, FoundCar } from '../interfaces';

export const getFilteredCars = async (filters: DefaultCarFilters): Promise<FoundCar[]> => {
  console.log('fetching cars...', filters);
  
  try {
    const response = await axios.post<FoundCar[]>(`http://localhost:3000/cars/`, { filters });
    return response.data;
  } catch (error) {
    throw new AxiosError((error as Error).stack);
  }
};

export const getOneFBCar = async (url: string): Promise<Car> => {
  try {
    const response = await axios.post<FoundCar>(`http://localhost:3000/facebook/`, { url });
    return response.data;
  } catch (error) {
    throw new AxiosError((error as Error).stack);
  }
}

export const getOneCLCar = async (url: string): Promise<Car> => {
  try {
    const response = await axios.post<FoundCar>(`http://localhost:3000/craigslist/`, { url });
    return response.data;
  } catch (error) {
    throw new AxiosError((error as Error).stack);
  }
}