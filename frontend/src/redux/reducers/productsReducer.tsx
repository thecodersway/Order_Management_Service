import { createSlice } from '@reduxjs/toolkit';
import { Item } from '../models/productsModel';
import { fetchProductsAsync } from '../services/productsService';

interface ProductsState {
    data: Item[];
    loading: boolean;
    error: string | null;
  }
  const initialState: ProductsState = {
    data: [],
    loading: false,
    error: null,
  };
  const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchProductsAsync.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchProductsAsync.fulfilled, (state, action) => {
          state.data = action.payload;
          state.loading = false;
        })
        .addCase(fetchProductsAsync.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        });
    },
  });
  export default productsSlice.reducer;
