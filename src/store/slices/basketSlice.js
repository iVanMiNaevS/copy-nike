import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    items: [],
  },
  reducers: {
    addItem(state, action) {
      if (state.items.length > 0) {
        let count = 0;
        state.items.forEach((el) => {
          if (
            JSON.stringify(el.options) ===
            JSON.stringify(action.payload.options)
          ) {
            count++;
          }
        });
        if (count === 0) {
          state.items.push(action.payload);
          state.items.forEach((el, index) => {
            el.idInBasket = index;
          });
        }
      } else {
        state.items.push({ ...action.payload, idInBasket: 0 });
      }
    },
    deleteItem(state, action) {
      state.items = state.items.filter(
        (el) => el.idInBasket !== action.payload.id
      );
    },
    countItem(state, action) {
      state.items.forEach((el) => {
        if (el.idInBasket === action.payload.id) {
          el.count = action.payload.count;
        }
      });
    },
  },
});

export const { addItem, deleteItem, countItem } = basketSlice.actions;
export default basketSlice.reducer;
