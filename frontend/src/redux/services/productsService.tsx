import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Item } from '../models/productsModel';


export const fetchProductsAsync = createAsyncThunk<Item[]>(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://10.0.2.2:8083/products');
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue('Failed to load products');
    }
  }
);
