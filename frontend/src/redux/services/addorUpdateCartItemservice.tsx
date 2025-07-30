
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CartItem } from '../models/cartItemModel';


export const addToCartAsync = createAsyncThunk<CartItem, CartItem>(
  'cart/addToCart',
  async (item: CartItem, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://10.0.2.2:8083/cart', item);
      return response.data;
    } catch (error) {
      return rejectWithValue('Failed to add item to cart');
    }
  }
);
