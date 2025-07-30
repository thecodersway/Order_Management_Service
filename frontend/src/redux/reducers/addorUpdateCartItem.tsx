
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '../models/cartItemModel';
import { addToCartAsync } from '../services/addorUpdateCartItemservice';


interface CartState {
  items: CartItem[];
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
      .addCase(addToCartAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToCartAsync.fulfilled, (state, action: PayloadAction<CartItem>) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(addToCartAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || 'Failed to add item to cart';
      });
  },
});

export default cartSlice.reducer;
