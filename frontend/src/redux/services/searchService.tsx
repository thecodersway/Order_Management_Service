
import axios from 'axios';

const BASE_URL = 'http://10.0.2.2:8083/products/search';

export const searchProducts = async (query: string) => {
    try {
        const response = await axios.get(`${BASE_URL}?q=${query}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching search results', error);
        throw error;
    }
};

