import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetCartItem } from '../models/getCartItemsModel';
import { fetchCartItemsAsync } from '../services/getCartItem';


interface CartState {
  find: any;
  items: GetCartItem[];
  loading: boolean;
  error: string | null;
}

const initialState: CartState = {
  items: [],
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItemsAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCartItemsAsync.fulfilled, (state, action: PayloadAction<GetCartItem[]>) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchCartItemsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || 'Failed to load cart items';
      });
  },
});

export default cartSlice.reducer;
