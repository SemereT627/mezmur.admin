import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../utils/api";

const INITIAL_STATE = {
  fetchCategoriesLoading: false,
  fetchCategoriesError: null,

  createCategoryLoading: false,
  createCategoryError: null,

  fetchCategoryLoading: false,
  fetchCategoryError: null,

  updateCategoryLoading: false,
  updateCategoryError: null,

  deleteCategoryLoading: false,
  deleteCategoryError: null,

  categories: [],
};

export const fetchCategoriesAsync = createAsyncThunk(
  "category/fetchCategories",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.get("/categories");
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const createCategoryAsync = createAsyncThunk(
  "category/createCategory",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.post("/api/categories", data);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchCategoryAsync = createAsyncThunk(
  "category/fetchCategory",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`/api/categories/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateCategoryAsync = createAsyncThunk(
  "category/updateCategory",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.put(`/api/categories/${data.id}`, data);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteCategoryAsync = createAsyncThunk(
  "category/deleteCategory",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.delete(`/api/categories/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    /**
     * Fetch Categories
     */
    builder
      .addCase(fetchCategoriesAsync.pending, (state) => {
        state.fetchCategoriesLoading = true;
      })
      .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
        state.fetchCategoriesLoading = false;
        state.categories = action.payload.data.data.categories;
      })
      .addCase(fetchCategoriesAsync.rejected, (state, action) => {
        state.fetchCategoriesLoading = false;
        state.fetchCategoriesError = action.error.message;
      })
      /**
       * Create Category
       */
      .addCase(createCategoryAsync.pending, (state) => {
        state.createCategoryLoading = true;
      })
      .addCase(createCategoryAsync.fulfilled, (state, action) => {
        state.createCategoryLoading = false;
        state.categories.push(action.payload);
      })
      .addCase(createCategoryAsync.rejected, (state, action) => {
        state.createCategoryLoading = false;
        state.createCategoryError = action.error.message;
      })
      /**
       * Fetch Category
       */
      .addCase(fetchCategoryAsync.pending, (state) => {
        state.fetchCategoryLoading = true;
      })
      .addCase(fetchCategoryAsync.fulfilled, (state, action) => {
        state.fetchCategoryLoading = false;
        state.categories.push(action.payload);
      })
      .addCase(fetchCategoryAsync.rejected, (state, action) => {
        state.fetchCategoryLoading = false;
        state.fetchCategoryError = action.error.message;
      })

      /**
       * Update Category
       */
      .addCase(updateCategoryAsync.pending, (state) => {
        state.updateCategoryLoading = true;
      })
      .addCase(updateCategoryAsync.fulfilled, (state, action) => {
        state.updateCategoryLoading = false;
        const index = state.categories.findIndex(
          (category) => category.id === action.payload.id
        );
        state.categories[index] = action.payload;
      })
      .addCase(updateCategoryAsync.rejected, (state, action) => {
        state.updateCategoryLoading = false;
        state.updateCategoryError = action.error.message;
      })
      /**
       * Delete Category
       */
      .addCase(deleteCategoryAsync.pending, (state) => {
        state.deleteCategoryLoading = true;
      })
      .addCase(deleteCategoryAsync.fulfilled, (state, action) => {
        state.deleteCategoryLoading = false;
        const index = state.categories.findIndex(
          (category) => category.id === action.payload.id
        );
        state.categories.splice(index, 1);
      })
      .addCase(deleteCategoryAsync.rejected, (state, action) => {
        state.deleteCategoryLoading = false;
        state.deleteCategoryError = action.error.message;
      });
  },
});

export default categorySlice.reducer;
