import { configureStore } from "@reduxjs/toolkit";
import moveiReducer from "../redux/slice/movieSlice";

export const store = configureStore({
  reducer: {
    movie: moveiReducer,
  },
});
