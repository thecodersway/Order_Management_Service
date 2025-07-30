
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Address } from '../models/addressModel';


export const fetchShippingAddressesAsync = createAsyncThunk<Address[]>(
  'address/fetchShippingAddresses',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<Address[]>('http://10.0.2.2:8083/address/shipping');
      return response.data;
    } catch (error) {
      return rejectWithValue('Failed to load shipping addresses');
    }
  }
);
