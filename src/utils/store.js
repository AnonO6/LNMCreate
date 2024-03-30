import { configureStore } from "@reduxjs/toolkit";
import appliedProjectSlice from "./appliedProjectSlice";
const store = configureStore({
  reducer: {
    appliedProject: appliedProjectSlice,
  },
});
export default store;
