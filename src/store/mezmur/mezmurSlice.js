import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../utils/api";

const INITIAL_STATE = {
  fetchMezmursLoading: false,
  fetchMezmursError: null,

  createMezmurLoading: false,
  createMezmurError: null,

  fetchMezmurLoading: false,
  fetchMezmurError: null,

  updateMezmurLoading: false,
  updateMezmurError: null,

  deleteMezmurLoading: false,
  deleteMezmurError: null,

  mezmurs: [],
};

export const fetchMezmursAsync = createAsyncThunk(
  "mezmur/fetchMezmurs",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.get("/api/mezmurs");
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const createMezmurAsync = createAsyncThunk(
  "mezmur/createMezmur",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.post("/api/mezmurs", data);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchMezmurAsync = createAsyncThunk(
  "mezmur/fetchMezmur",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`/api/mezmurs/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateMezmurAsync = createAsyncThunk(
  "mezmur/updateMezmur",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.put(`/api/mezmurs/${data.id}`, data);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteMezmurAsync = createAsyncThunk(
  "mezmur/deleteMezmur",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.delete(`/api/mezmurs/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const mezmurSlice = createSlice({
  name: "mezmur",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    /**
     * Fetch Mezmurs
     */
    builder
      .addCase(fetchMezmursAsync.pending, (state) => {
        state.fetchMezmursLoading = true;
        state.fetchMezmursError = null;
      })
      .addCase(fetchMezmursAsync.fulfilled, (state, action) => {
        state.fetchMezmursLoading = false;
        state.mezmurs = action.payload;
      })
      .addCase(fetchMezmursAsync.rejected, (state, action) => {
        state.fetchMezmursLoading = false;
        state.fetchMezmursError = action.payload;
      })
      /**
       * Create Mezmur
       */
      .addCase(createMezmurAsync.pending, (state) => {
        state.createMezmurLoading = true;
        state.createMezmurError = null;
      })
      .addCase(createMezmurAsync.fulfilled, (state, action) => {
        state.createMezmurLoading = false;
        state.mezmurs.push(action.payload);
      })
      .addCase(createMezmurAsync.rejected, (state, action) => {
        state.createMezmurLoading = false;
        state.createMezmurError = action.payload;
      })
      /**
       * Fetch Mezmur
       */
      .addCase(fetchMezmurAsync.pending, (state) => {
        state.fetchMezmurLoading = true;
        state.fetchMezmurError = null;
      })
      .addCase(fetchMezmurAsync.fulfilled, (state, action) => {
        state.fetchMezmurLoading = false;
        state.mezmurs.push(action.payload);
      })
      .addCase(fetchMezmurAsync.rejected, (state, action) => {
        state.fetchMezmurLoading = false;
        state.fetchMezmurError = action.payload;
      })
      /**
       * Update Mezmur
       */
      .addCase(updateMezmurAsync.pending, (state) => {
        state.updateMezmurLoading = true;
        state.updateMezmurError = null;
      })
      .addCase(updateMezmurAsync.fulfilled, (state, action) => {
        state.updateMezmurLoading = false;
        state.mezmurs.push(action.payload);
      })
      .addCase(updateMezmurAsync.rejected, (state, action) => {
        state.updateMezmurLoading = false;
        state.updateMezmurError = action.payload;
      })
      /**
       * Delete Mezmur
       */
      .addCase(deleteMezmurAsync.pending, (state) => {
        state.deleteMezmurLoading = true;
        state.deleteMezmurError = null;
      })
      .addCase(deleteMezmurAsync.fulfilled, (state, action) => {
        state.deleteMezmurLoading = false;
        state.mezmurs.push(action.payload);
      })
      .addCase(deleteMezmurAsync.rejected, (state, action) => {
        state.deleteMezmurLoading = false;
        state.deleteMezmurError = action.payload;
      });
  },
});

export default mezmurSlice.reducer;
