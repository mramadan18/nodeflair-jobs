import { createSlice } from "@reduxjs/toolkit";
import jobs from "../../data/data";

const initialState = {
  jobs,
  targetJob: jobs[0],
};

export const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    chooseJob: (state, action) => {
      state.targetJob = action.payload;
    },
  },
});

export const { chooseJob } = jobsSlice.actions;
export default jobsSlice.reducer;
