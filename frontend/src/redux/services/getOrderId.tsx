import axios from 'axios';

export const fetchLatestOrderID = async (): Promise<number> => {
    try {
        const response = await axios.get('http://10.0.2.2:8083/order/id');
        return response.data.order_id;
    } catch (error) {
        console.error('Error fetching latest order ID:', error);
        throw error;
    }
};
