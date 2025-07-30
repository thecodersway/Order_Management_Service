// src/redux/services/productService.ts

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from '../models/productsByCategoryModel';


export const fetchProductsByCategoryAsync = createAsyncThunk<Product[], number>(
  'products/fetchProductsByCategory',
  async (categoryID, { rejectWithValue }) => {
    try {
      const parms = new URLSearchParams();
      parms.append('category_id', categoryID.toString());
      const response = await axios.get<Product[]>(`http://10.0.2.2:8083/products/category?${parms.toString()}`);
      // console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue('Failed to load products by category');
    }
  }
);
