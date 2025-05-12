import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "../services/apiSlice";

const store = configureStore({
  reducer: {
    api: apiReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
