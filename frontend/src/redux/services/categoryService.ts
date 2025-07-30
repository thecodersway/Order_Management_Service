
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Item } from '../models/categoryModel';


export const fetchCategoriesAsync = createAsyncThunk<Item[]>(
  'category/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://10.0.2.2:8083/categories');
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue('Failed to load categories');
    }
  }
);

