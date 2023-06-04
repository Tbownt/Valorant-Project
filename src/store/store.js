import { configureStore } from "@reduxjs/toolkit";
import { ValorantSlice } from "./ValorantSlice";

export const store = configureStore({
  reducer: {
    valorant: ValorantSlice.reducer,
  },
});
