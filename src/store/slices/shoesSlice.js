import { createSlice } from "@reduxjs/toolkit";
import { shoes } from "../../contentArrs/allShoes";
const shoesSlice = createSlice({
  name: "shoes",
  initialState: { shoes: shoes },
  reducers: {
    filterGender(state, action) {
      const filtersActive = action.payload;
      let res = [];
      filtersActive.forEach((el) => {
        const a = state.shoes.filter((item) => item[el.key] === el.value);
        res.push(a);
      });
      let notSortedShoes = [];
      res.forEach((el) => {
        notSortedShoes.push(...el);
      });
      state.shoes = notSortedShoes;
      console.log(state.shoes);
    },
  },
});
export const { filterGender } = shoesSlice.actions;
export default shoesSlice.reducer;
