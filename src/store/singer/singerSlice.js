import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../utils/api";

const INITIAL_STATE = {
  fetchSingersLoading: false,
  fetchSingersError: null,

  createSingerLoading: false,
  createSingerError: null,

  fetchSingerLoading: false,
  fetchSingerError: null,

  updateSingerLoading: false,
  updateSingerError: null,

  deleteSingerLoading: false,
  deleteSingerError: null,

  singers: [],
};

export const fetchSingersAsync = createAsyncThunk(
  "singer/fetchSingers",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.get("/api/singers");
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const createSingerAsync = createAsyncThunk(
  "singer/createSinger",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.post("/api/singers", data);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchSingerAsync = createAsyncThunk(
  "singer/fetchSinger",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`/api/singers/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateSingerAsync = createAsyncThunk(
  "singer/updateSinger",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.put(`/api/singers/${data.id}`, data);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteSingerAsync = createAsyncThunk(
  "singer/deleteSinger",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.delete(`/api/singers/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const singerSlice = createSlice({
  name: "singer",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    /**
     * Fetch singers
     */
    builder
      .addCase(fetchSingersAsync.pending, (state) => {
        state.fetchSingersLoading = true;
        state.fetchSingersError = null;
      })
      .addCase(fetchSingersAsync.fulfilled, (state, action) => {
        state.fetchSingersLoading = false;
        state.fetchSingersError = null;
        state.singers = action.payload;
      })
      .addCase(fetchSingersAsync.rejected, (state, action) => {
        state.fetchSingersLoading = false;
        state.fetchSingersError = action.payload;
      })
      /**
       * Create singer
       */
      .addCase(createSingerAsync.pending, (state) => {
        state.createSingerLoading = true;
        state.createSingerError = null;
      })
      .addCase(createSingerAsync.fulfilled, (state, action) => {
        state.createSingerLoading = false;
        state.createSingerError = null;
        state.singers.push(action.payload);
      })
      .addCase(createSingerAsync.rejected, (state, action) => {
        state.createSingerLoading = false;
        state.createSingerError = action.payload;
      })
      /**
       * Fetch singer
       */
      .addCase(fetchSingerAsync.pending, (state) => {
        state.fetchSingerLoading = true;
        state.fetchSingerError = null;
      })
      .addCase(fetchSingerAsync.fulfilled, (state, action) => {
        state.fetchSingerLoading = false;
        state.fetchSingerError = null;
        state.singers.push(action.payload);
      })
      .addCase(fetchSingerAsync.rejected, (state, action) => {
        state.fetchSingerLoading = false;
        state.fetchSingerError = action.payload;
      })
      /**
       * Update singer
       */
      .addCase(updateSingerAsync.pending, (state) => {
        state.updateSingerLoading = true;
        state.updateSingerError = null;
      })
      .addCase(updateSingerAsync.fulfilled, (state, action) => {
        state.updateSingerLoading = false;
        state.updateSingerError = null;
        const index = state.singers.findIndex(
          (singer) => singer.id === action.payload.id
        );
        state.singers[index] = action.payload;
      })
      .addCase(updateSingerAsync.rejected, (state, action) => {
        state.updateSingerLoading = false;
        state.updateSingerError = action.payload;
      })
      /**
       * Delete singer
       */
      .addCase(deleteSingerAsync.pending, (state) => {
        state.deleteSingerLoading = true;
        state.deleteSingerError = null;
      })
      .addCase(deleteSingerAsync.fulfilled, (state, action) => {
        state.deleteSingerLoading = false;
        state.deleteSingerError = null;
        state.singers = state.singers.filter(
          (singer) => singer.id !== action.payload.id
        );
      })
      .addCase(deleteSingerAsync.rejected, (state, action) => {
        state.deleteSingerLoading = false;
        state.deleteSingerError = action.payload;
      });
  },
});

export default singerSlice.reducer;
