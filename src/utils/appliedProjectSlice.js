import { createSlice } from "@reduxjs/toolkit";
const appliedProjectSlice = createSlice({
  name: "applied projects",
  initialState: {
    projects: [],
  },
  reducers: {
    applyProject: (state, action) => {
      state.projects.push(action.payload);
      console.log("Project applied:", action.payload);
    },
    leaveProject: (state, action) => {
      //Here action.payload must be the ID of project to be removed
      const index = state.projects.findIndex(
        (project) => project.ID == action.payload
      );
      state.projects.splice(index, 1);
      console.log("Project unapplied:", action.payload);
      console.log(state.projects);
    },
  },
});
export const { applyProject, leaveProject } = appliedProjectSlice.actions;
export default appliedProjectSlice.reducer;
