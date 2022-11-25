import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  fetchMezmursLoading: false,
  fetchMezmursError: null,
  mezmurs: [],
};

export const mezmurSlice = createSlice({
  name: "mezmur",
  initialState: INITIAL_STATE,
  reducers: {},
});
