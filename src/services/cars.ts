import axios, { AxiosError } from 'axios';
import { DefaultCarFilters, FoundCar } from '../interfaces';

export const getFilteredCars = async (filters: DefaultCarFilters): Promise<FoundCar[]> => {
    console.log('fetching cars...', filters);
    
    try {
        const response = await axios.post<FoundCar[]>(`http://localhost:3000/cars/`, { filters });
        return response.data;
    } catch (error) {
        throw new AxiosError((error as Error).stack);
    }
};