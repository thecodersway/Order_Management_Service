
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Address } from '../models/addressModel';

export const fetchBillingAddressesAsync = createAsyncThunk<Address[]>(
  'address/fetchBillingAddresses',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<Address[]>('http://10.0.2.2:8083/address/billing');
      return response.data;
    } catch (error) {
      return rejectWithValue('Failed to load billing addresses');
    }
  }
);

