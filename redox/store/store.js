import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "../reducer/author.reducer";

const store = configureStore({
  reducer: {
    quote: quoteReducer,
  },
});

export default store;