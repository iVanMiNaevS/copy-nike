import { createSlice } from "@reduxjs/toolkit";
import { shoes } from "../../contentArrs/allShoes";
import { UseDispatch } from "react-redux";
export const shoesSlice = createSlice({
  // должно быть 3
  name: "shoes",
  initialState: {
    mainShoes: shoes,
    shoes: shoes,
    addArrs: {},
    filtersActive: { gender: [], height: [], price: [], sizes: [], colors: [] },
  },
  reducers: {
    switchFilter(state, action) {
      const { id } = action.payload;
      let haveMatched = true;

      switch (id) {
        case "gender":
          shoesSlice.caseReducers.filterGender(state, {
            type: "filterGender",
            payload: state.filtersActive.gender,
          });

          break;
        case "height":
          shoesSlice.caseReducers.filterHeight(state, {
            type: "filterHeight",
            payload: state.filtersActive.height,
          });
          break;
        case "price":
          shoesSlice.caseReducers.filterPrice(state, {
            type: "filterPrice",
            payload: state.filtersActive.price,
          });
          break;
        case "sizes":
          shoesSlice.caseReducers.filterSize(state, {
            type: "filterSize",
            payload: state.filtersActive.sizes,
          });
          break;
        case "colors":
          shoesSlice.caseReducers.filterColor(state, {
            type: "filterColor",
            payload: state.filtersActive.colors,
          });
          break;
        default:
          haveMatched = false;
          break;
      }
      if (haveMatched) {
        shoesSlice.caseReducers.joinALLFiltersArr(state);
        haveMatched = false;
      }
    },

    addFilter(state, action) {
      if (
        state.filtersActive[action.payload.id].indexOf(action.payload.value) ===
        -1
      ) {
        state.filtersActive[action.payload.id].push(action.payload.value);
      }
    },
    joinALLFiltersArr(state) {
      const res = [];
      let arrOfArr = []; /// массив массивов
      for (let key in state.addArrs) {
        arrOfArr.push(...state.addArrs[key]);
      }

      if (Object.keys(state.addArrs).length === 1) {
        state.shoes = state.addArrs[Object.keys(state.addArrs)[0]];
      } else {
        const repetitions = Object.keys(state.addArrs).length;

        arrOfArr.forEach((el) => {
          let count = 0;
          arrOfArr.forEach((item) => {
            if (el.id === item.id) {
              count++;
            }
          });
          if (count === repetitions) {
            let count2 = 0;
            state.shoes.forEach((item) => {
              if (item.id === el.id) {
                count2++;
              }
            });
            if (count2 === 0) {
              res.push(el);
            }
          }
          state.shoes = res;
        });
      }
    },

    filterGender(state, action) {
      state.addArrs = {
        ...state.addArrs,
        ArrGender: [],
      };

      const filtersActive = action.payload;
      filtersActive.forEach((el) => {
        state.mainShoes.forEach((shoes) => {
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
        state.mainShoes.forEach((shoes) => {
          if (el === shoes.height) {
            state.addArrs.ArrHeight.push(shoes);
          }
        });
      });
    },
    filterPrice(state, action) {
      const filterActive = action.payload;
      state.addArrs = { ...state.addArrs, ArrPrice: [] };
      state.mainShoes.forEach((shoes) => {
        filterActive.forEach((item) => {
          if (
            Number(item[0]) <= shoes.price &&
            Number(item[1]) >= shoes.price
          ) {
            state.addArrs.ArrPrice.push(shoes);
          }
        });
      });
    },
    filterSize(state, action) {
      const filterActive = action.payload;
      state.addArrs = { ...state.addArrs, ArrSize: [] };
      state.mainShoes.forEach((shoes) => {
        shoes.sizes.forEach((size) => {
          filterActive.forEach((sizeOfFilter) => {
            if (size === sizeOfFilter && state.addArrs.ArrSize.length === 0) {
              state.addArrs.ArrSize.push(shoes);
            } else if (size === sizeOfFilter) {
              let count = 0;
              state.addArrs.ArrSize.forEach((obj) => {
                if (obj.id === shoes.id) {
                  count++;
                }
              });
              if (count === 0) {
                state.addArrs.ArrSize.push(shoes);
              }
            }
          });
        });
      });
    },
    filterColor(state, action) {
      const filterActive = action.payload;
      state.addArrs = { ...state.addArrs, ArrColor: [] };
      state.mainShoes.forEach((shoes) => {
        shoes.colors.forEach((color) => {
          filterActive.forEach((colorOfFilter) => {
            if (
              color === colorOfFilter &&
              state.addArrs.ArrColor.length === 0
            ) {
              state.addArrs.ArrColor.push(shoes);
            } else if (color === colorOfFilter) {
              let count = 0;
              state.addArrs.ArrColor.forEach((obj) => {
                if (obj.id === shoes.id) {
                  count++;
                }
              });
              if (count === 0) {
                state.addArrs.ArrColor.push(shoes);
              }
            }
          });
        });
      });
    },
  },
});

export const {
  filterGender,
  joinALLFiltersArr,
  filterHeight,
  filterPrice,
  filterSize,
  filterColor,
  addFilter,
  switchFilter,
} = shoesSlice.actions;
export default shoesSlice.reducer;
