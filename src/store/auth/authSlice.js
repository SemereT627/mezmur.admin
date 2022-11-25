import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  loginLoading: false,
  loginError: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {},
});

export default authSlice.reducer;
