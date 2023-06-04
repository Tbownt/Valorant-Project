import { createSlice } from "@reduxjs/toolkit";

export const ValorantSlice = createSlice({
  name: "ValorantSlice",
  initialState: { agents: [] },
  reducers: {
    setAgents: (state, { payload }) => {
      state.agents = payload;
    },
  },
});

export const { setAgents } = ValorantSlice.actions;
