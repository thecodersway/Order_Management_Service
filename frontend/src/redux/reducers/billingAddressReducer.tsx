
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Address } from '../models/addressModel';
import { fetchBillingAddressesAsync } from '../services/billingAddressService';

interface BillingState {
  addresses: Address[];
  selectedAddress:string|null;
  loading: boolean;
  error: string | null;
}

const initialState: BillingState = {
  addresses: [],
  selectedAddress: null,
  loading: false,
  error: null,
};

const billingSlice = createSlice({
  name: 'billing',
  initialState,
  reducers: {
    setSelectedBillingAddress(state, action: PayloadAction<string>) {
      state.selectedAddress = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBillingAddressesAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBillingAddressesAsync.fulfilled, (state, action: PayloadAction<Address[]>) => {
        state.addresses = action.payload;
        state.loading = false;
      })
      .addCase(fetchBillingAddressesAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || 'Failed to load billing addresses';
      });
  },
});

export const {setSelectedBillingAddress} = billingSlice.actions;
export default billingSlice.reducer;
