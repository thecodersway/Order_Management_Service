// src/features/category/reducer.ts
// src/features/category/reducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCategoriesAsync} from '../services/categoryService';
import { Item } from '../models/categoryModel';


interface CategoryState {
  items: Item[];
  loading: boolean;
  error: string | null;
}
const initialState: CategoryState = {
  items: [],
  loading: false,
  error: null,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategoriesAsync.fulfilled, (state, action: PayloadAction<Item[]>) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchCategoriesAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || 'Failed to load categories';
      });
  },
});

export default categorySlice.reducer;


