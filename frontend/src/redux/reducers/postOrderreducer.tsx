import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { OrderResponse } from '../models/postOrder';
import { createOrderAsync } from '../services/postOrderService';

interface OrderState {
  order: OrderResponse;
  loading: boolean;
  error: string | null;
}

const initialState: OrderState = {
  order: {} as OrderResponse,
  loading: false,
  error: null,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrderAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createOrderAsync.fulfilled, (state, action: PayloadAction<OrderResponse>) => {
        state.order = action.payload;
        state.loading = false;
      })
      .addCase(createOrderAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || 'Failed to create order';
      });
  },
});

export default orderSlice.reducer;
