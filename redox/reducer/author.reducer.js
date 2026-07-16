import { createSlice } from "@reduxjs/toolkit";
import { set } from "react-hook-form";

const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    author: "",
    quotes: [],
    error: null,
  },
  reducers: {
    setAuthor(state, action) {
      state.author = action.payload;
    },
    setQuotes(state, action) {
      state.quotes = action.payload;
      state.error = null;
    },
    setError(state, action) {
      state.error = action.payload;
      state.quotes = [];
    }
  },
});

export const { setAuthor, setQuotes, setError } = quoteSlice.actions;
export default quoteSlice.reducer;
