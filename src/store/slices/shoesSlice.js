import { createSlice } from "@reduxjs/toolkit";
import { shoes } from "../../contentArrs/allShoes";
const shoesSlice = createSlice({
  // должно быть 3
  name: "shoes",
  initialState: {
    shoes: shoes,
    addArrs: {},
  },
  reducers: {
    joinALLFiltersArr(state) {
      const res = [];
      const arrOfArr = []; /// массив массивов
      for (let key in state.addArrs) {
        arrOfArr.push(state.addArrs[key]);
      }
      ///////////////////////////////////////////

      if (Object.keys(state.addArrs).length === 1) {
        state.shoes = state.addArrs[Object.keys(state.addArrs)[0]];
      } else {
        let mainObj = {};
      }
      // state.shoes = res;
    },

    filterGender(state, action) {
      state.addArrs = { ...state.addArrs, ArrGender: [] };
      const filtersActive = action.payload;
      filtersActive.forEach((el) => {
        state.shoes.forEach((shoes) => {
          if (el === shoes.gender) {
            state.addArrs.ArrGender.push(shoes);
          }
        });
      });
    },
    filterHeight(state, action) {
      const filtersActive = action.payload;
      state.addArrs = { ...state.addArrs, ArrHeight: [] };
      filtersActive.forEach((el) => {
        state.shoes.forEach((shoes) => {
          if (el === shoes.height) {
            state.addArrs.ArrHeight.push(shoes);
          }
        });
      });
    },
    filterPrice(state, action) {
      const filterActive = action.payload;
      state.addArrs = { ...state.addArrs, ArrPrice: [] };
      const thenums = filterActive.map((range) => {
        return range.match(/\d+/g);
      });
      state.shoes.forEach((shoes) => {
        thenums.forEach((item) => {
          if (
            Number(item[0]) <= shoes.price &&
            Number(item[1]) >= shoes.price
          ) {
            state.addArrs.ArrPrice.push(shoes);
          }
        });
      });
    },
  },
});
export const { filterGender, joinALLFiltersArr, filterHeight, filterPrice } =
  shoesSlice.actions;
export default shoesSlice.reducer;
