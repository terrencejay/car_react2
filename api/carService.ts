// src/services/carService.ts
import axios from 'axios';

const API_URL = 'https://api.api-ninjas.com/v1/cars?limit=2&model=';
const API_KEY = 'Rcf1QFKKmyGSLtyV9XiDzQ==iktEMrdBhSwfyqZM'; // Replace with your actual API key

export const getCars = async () => {
    try {
        const response = await axios.get(API_URL, {
            headers: { 'X-Api-Key': API_KEY }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching cars:', error);
        throw error;
    }
};
