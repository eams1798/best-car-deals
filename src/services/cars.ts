import axios from 'axios';
import { DefaultCarFilters, FoundCar } from '../interfaces';

export const getAllCars = async (filters: DefaultCarFilters): Promise<FoundCar[]> => {
    console.log('fetching cars...', filters);
    
    try {
        const response = await axios.post<FoundCar[]>(`http://localhost:3000/cars/`, { filters });
        return response.data;
    } catch (error) {
        console.error((error as Error).stack);
        return [];
    }
};