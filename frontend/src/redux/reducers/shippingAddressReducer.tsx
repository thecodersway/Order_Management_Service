
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Address } from '../models/addressModel';
import { fetchShippingAddressesAsync } from '../services/shippingAddressService';


interface ShipingState {
  addresses: Address[];
  selectedAddress: string|null,
  loading: boolean;
  error: string | null;
}

const initialState: ShipingState = {
  addresses: [],
  selectedAddress: null,
  loading: false,
  error: null,
};

const shippingSlice = createSlice({
  name: 'shipping',
  initialState,
  reducers: {
    setSelectedShippingAddress(state, action: PayloadAction<string>) {
      state.selectedAddress = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchShippingAddressesAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchShippingAddressesAsync.fulfilled, (state, action: PayloadAction<Address[]>) => {
        state.addresses = action.payload;
        state.loading = false;
      })
      .addCase(fetchShippingAddressesAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || 'Failed to load billing addresses';
      });
  },
});

export const { setSelectedShippingAddress } = shippingSlice.actions;
export default shippingSlice.reducer;

