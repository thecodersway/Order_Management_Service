// services/cartItemService.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { GetCartItem } from '../models/getCartItemsModel';


export const fetchCartItemsAsync = createAsyncThunk<GetCartItem[],number>(
  'cart/fetchCartItems',
  async (cartId, { rejectWithValue })=> {
    try {
      console.log('i am here ');
      const response = await axios.get(`http://10.0.2.2:8083/cart/items?cartID=${cartId}`, {
        params: { cart_id: cartId },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching cart items:', error);
      return rejectWithValue('Failed to load cart items');
    }
  }
);
