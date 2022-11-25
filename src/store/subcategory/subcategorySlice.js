import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../utils/api";

const INITIAL_STATE = {
  fetchSubCategoriesLoading: false,
  fetchSubCategoriesError: null,

  createSubCategoryLoading: false,
  createSubCategoryError: null,

  fetchSubCategoryLoading: false,
  fetchSubCategoryError: null,

  updateSubCategoryLoading: false,
  updateSubCategoryError: null,

  deleteSubCategoryLoading: false,
  deleteSubCategoryError: null,

  subCategories: [],
};

export const fetchSubCategoriesAsync = createAsyncThunk(
  "subcategory/fetchSubCategories",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.get("/api/subcategories");
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const createSubCategoryAsync = createAsyncThunk(
  "subcategory/createSubCategory",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.post("/api/subcategories", data);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchSubCategoryAsync = createAsyncThunk(
  "subcategory/fetchSubCategory",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`/api/subcategories/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateSubCategoryAsync = createAsyncThunk(
  "subcategory/updateSubCategory",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.put(`/api/subcategories/${data.id}`, data);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteSubCategoryAsync = createAsyncThunk(
  "subcategory/deleteSubCategory",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.delete(`/api/subcategories/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const subcategorySlice = createSlice({
  name: "subcategory",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    /**
     * Fetch SubCategories
     */
    builder
      .addCase(fetchSubCategoriesAsync.pending, (state) => {
        state.fetchSubCategoriesLoading = true;
        state.fetchSubCategoriesError = null;
      })
      .addCase(fetchSubCategoriesAsync.fulfilled, (state, action) => {
        state.fetchSubCategoriesLoading = false;
        state.subCategories = action.payload;
      })
      .addCase(fetchSubCategoriesAsync.rejected, (state, action) => {
        state.fetchSubCategoriesLoading = false;
        state.fetchSubCategoriesError = action.payload;
      })
      /**
       * Create SubCategory
       */
      .addCase(createSubCategoryAsync.pending, (state) => {
        state.createSubCategoryLoading = true;
        state.createSubCategoryError = null;
      })
      .addCase(createSubCategoryAsync.fulfilled, (state, action) => {
        state.createSubCategoryLoading = false;
        state.subCategories.push(action.payload);
      })
      .addCase(createSubCategoryAsync.rejected, (state, action) => {
        state.createSubCategoryLoading = false;
        state.createSubCategoryError = action.payload;
      })
      /**
       * Fetch SubCategory
       */
      .addCase(fetchSubCategoryAsync.pending, (state) => {
        state.fetchSubCategoryLoading = true;
        state.fetchSubCategoryError = null;
      })
      .addCase(fetchSubCategoryAsync.fulfilled, (state, action) => {
        state.fetchSubCategoryLoading = false;
        state.subCategories.push(action.payload);
      })
      .addCase(fetchSubCategoryAsync.rejected, (state, action) => {
        state.fetchSubCategoryLoading = false;
        state.fetchSubCategoryError = action.payload;
      })
      /**
       * Update SubCategory
       */
      .addCase(updateSubCategoryAsync.pending, (state) => {
        state.updateSubCategoryLoading = true;
        state.updateSubCategoryError = null;
      })
      .addCase(updateSubCategoryAsync.fulfilled, (state, action) => {
        state.updateSubCategoryLoading = false;
        const index = state.subCategories.findIndex(
          (subCategory) => subCategory.id === action.payload.id
        );
        state.subCategories[index] = action.payload;
      })
      .addCase(updateSubCategoryAsync.rejected, (state, action) => {
        state.updateSubCategoryLoading = false;
        state.updateSubCategoryError = action.payload;
      })
      /**
       * Delete SubCategory
       */
      .addCase(deleteSubCategoryAsync.pending, (state) => {
        state.deleteSubCategoryLoading = true;
        state.deleteSubCategoryError = null;
      })
      .addCase(deleteSubCategoryAsync.fulfilled, (state, action) => {
        state.deleteSubCategoryLoading = false;
        state.subCategories = state.subCategories.filter(
          (subCategory) => subCategory.id !== action.payload.id
        );
      })
      .addCase(deleteSubCategoryAsync.rejected, (state, action) => {
        state.deleteSubCategoryLoading = false;
        state.deleteSubCategoryError = action.payload;
      });
  },
});

export default subcategorySlice.reducer;
