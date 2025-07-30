import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ProductsDescriptions } from '../models/productsDescriptionModel';


export const fetchProductDescriptionAsync = createAsyncThunk<ProductsDescriptions[], number>(
  'products/fetchProductDescription',
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axios.get<ProductsDescriptions[]>(`http://10.0.2.2:8083/products/specifications?product_id=${productId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue('Failed to load product description');
    }
  }
);
