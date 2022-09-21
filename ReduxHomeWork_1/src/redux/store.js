import { configureStore } from "@reduxjs/toolkit";
import notesSlice from "./Notes/NotesSlice";

export const store = configureStore({
  reducer: {
    notes: notesSlice,
  },
});
