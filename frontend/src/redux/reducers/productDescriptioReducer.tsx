import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProductDescriptionAsync } from '../services/productDescriptionService';
import { ProductsDescriptions } from '../models/productsDescriptionModel';

interface ProductDescriptionState {
  description: ProductsDescriptions[];
  productData: ProductsDescriptions | null,
  loading: boolean;
  error: string | null;
}

const initialState: ProductDescriptionState = {
  description: [],
  productData: null,
  loading: false,
  error: null,
};

const productDescriptionSlice = createSlice({
  name: 'productDescription',
  initialState,
  reducers: {
    setProductData(state, action:PayloadAction<ProductsDescriptions>){
      state.productData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDescriptionAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductDescriptionAsync.fulfilled, (state, action: PayloadAction<ProductsDescriptions[]>) => {
        state.description = action.payload;
        state.loading = false;
      })
      .addCase(fetchProductDescriptionAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || 'Failed to load product description';
      });
  },
});

export const {setProductData} = productDescriptionSlice.actions;
export default productDescriptionSlice.reducer;

