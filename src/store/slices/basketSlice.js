import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    items: [],
  },
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
  },
});

export const { addItem } = basketSlice.actions;
export default basketSlice.reducer;
