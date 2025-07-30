import { createSlice } from '@reduxjs/toolkit';
import { fetchProductsByCategoryAsync } from '../services/productsByCategoryId';
import { Product } from '../models/productsByCategoryModel';

interface ProductsByCategoryState {
    data: Product[];
    loading: boolean;
    error: string | null;
}

const initialState: ProductsByCategoryState = {
    data: [],
    loading: false,
    error: null,
};

const productsByCategorySlice = createSlice({
    name: 'productsByCategory',
    initialState,
    reducers: {
        resetProducts: (state) => {
            state.data = [];
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsByCategoryAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProductsByCategoryAsync.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
            })
            .addCase(fetchProductsByCategoryAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { resetProducts } = productsByCategorySlice.actions;
export default productsByCategorySlice.reducer;
