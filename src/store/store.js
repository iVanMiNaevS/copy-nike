import { configureStore } from "@reduxjs/toolkit";
import shoesSlice from "./slices/shoesSlice";
import basketSlice from "./slices/basketSlice";

const store = configureStore({
  reducer: {
    basket: basketSlice,
    shoes: shoesSlice,
  },
});
export default store;
