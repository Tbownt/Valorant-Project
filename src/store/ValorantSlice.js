import { createSlice } from "@reduxjs/toolkit";

export const ValorantSlice = createSlice({
  name: "ValorantSlice",
  initialState: { agents: [] },
  reducers: {
    getAgents: (state, { payload }) => {
      state.agents = payload;
    },
  },
});

export const { getAgents } = ValorantSlice.actions;
