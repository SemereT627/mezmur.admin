import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import categorySlice from "./category/categorySlice";
import mezmurSlice from "./mezmur/mezmurSlice";
import subcategorySlice from "./subcategory/subcategorySlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    category: categorySlice,
    subcategory: subcategorySlice,
    mezmur: mezmurSlice,
  },
});
