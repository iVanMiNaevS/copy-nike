import { createSlice } from "@reduxjs/toolkit";
import { shoes } from "../../contentArrs/allShoes";
const shoesSlice = createSlice({
  name: "shoes",
  initialState: { shoes: shoes },
  reducers: {
    filterGender(state, action) {},
  },
});
export const { filterGender } = shoesSlice.actions;
export default shoesSlice.reducer;
