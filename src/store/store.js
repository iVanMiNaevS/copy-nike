import { configureStore } from "@reduxjs/toolkit";
import shoesSlice from "./slices/shoesSlice";

const store = configureStore({
  reducer: {
    shoes: shoesSlice,
  },
});
export default store;
