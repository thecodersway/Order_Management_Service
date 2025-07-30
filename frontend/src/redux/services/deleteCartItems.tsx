import axios from 'axios';

const API_BASE_URL = 'http://10.0.2.2:8083';

export const deleteCartItem = async (id: string): Promise<void> => {
  try {
    await axios.delete(`${API_BASE_URL}/cart/delete`, {
      params: { id },
    });
  } catch (error) {
    console.error('Error deleting cart item:', error);
    throw error;
  }
};
