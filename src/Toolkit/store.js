import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./Slices/JobSlice";

export const store = configureStore({
  reducer: {
    jobs: jobsReducer,
  },
});
