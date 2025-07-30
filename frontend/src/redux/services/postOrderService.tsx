import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Order, OrderResponse } from '../models/postOrder';

export const createOrderAsync = createAsyncThunk<OrderResponse, Order>(
  'order/createOrder',
  async (order: Order, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://10.0.2.2:8083/orders', order);
      return response.data;
    } catch (error) {
      return rejectWithValue('Failed to create order');
    }
  }
);
