import { createSlice } from "@reduxjs/toolkit";
import { shoes } from "../../contentArrs/allShoes";
function templateFilter(state, filterActive, arr, callback) {
  if (filterActive.length !== 0) {
    state.addArrs = {
      ...state.addArrs,
      [arr]: [],
    };
    callback(state, filterActive, arr);
  } else {
    delete state.addArrs[arr];
  }
}
export const shoesSlice = createSlice({
  // должно быть 3
  name: "shoes",
  initialState: {
    mainShoes: shoes,
    shoes: shoes,
    addArrs: {},
    filtersActive: { gender: [], height: [], price: [], sizes: [], colors: [] },
    sortBy: "",
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
        shoesSlice.caseReducers.sort(state);
        haveMatched = false;
      }
    },
    deleteFilter(state, action) {
      const index = state.filtersActive[action.payload.id].indexOf(
        action.payload.value
      );
      state.filtersActive[action.payload.id].splice(index, 1);
    },
    addFilter(state, action) {
      state.filtersActive[action.payload.id].push(action.payload.value);
    },
    joinALLFiltersArr(state) {
      const res = [];
      let arrOfArr = []; /// массив массивов
      if (Object.keys(state.addArrs).length === 0) {
        state.shoes = state.mainShoes;
      } else if (Object.keys(state.addArrs).length === 1) {
        state.shoes = state.addArrs[Object.keys(state.addArrs)[0]];
      } else {
        for (let key in state.addArrs) {
          arrOfArr.push(...state.addArrs[key]);
        }
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
    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
    sort(state) {
      if (state.sortBy === "Low-High") {
        state.shoes.sort((a, b) => {
          if (a.price === b.price) {
            return 0;
          } else {
            return a.price - b.price;
          }
        });
      } else if (state.sortBy === "High-Low") {
        state.shoes.sort((a, b) => {
          if (a.price === b.price) {
            return 0;
          } else {
            return b.price - a.price;
          }
        });
      } else if (state.sortBy === "Newest") {
        state.shoes.sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        });
      }
    },
    filterGender(state, action) {
      templateFilter(
        state,
        action.payload,
        "arrGender",
        (state, filterActive, arr) => {
          filterActive.forEach((el) => {
            state.mainShoes.forEach((shoes) => {
              if (el === shoes.gender) {
                state.addArrs[arr].push(shoes);
              }
            });
          });
        }
      );
    },
    filterHeight(state, action) {
      templateFilter(
        state,
        action.payload,
        "arrHeight",
        (state, filterActive, arr) => {
          filterActive.forEach((el) => {
            state.mainShoes.forEach((shoes) => {
              if (el === shoes.height) {
                state.addArrs[arr].push(shoes);
              }
            });
          });
        }
      );
    },
    filterPrice(state, action) {
      templateFilter(
        state,
        action.payload,
        "arrPrice",
        (state, filterActive, arr) => {
          state.mainShoes.forEach((shoes) => {
            filterActive.forEach((item) => {
              if (
                Number(item[0]) <= shoes.price &&
                Number(item[1]) >= shoes.price
              ) {
                state.addArrs[arr].push(shoes);
              }
            });
          });
        }
      );
    },
    filterSize(state, action) {
      templateFilter(
        state,
        action.payload,
        "arrSize",
        (state, filterActive, arr) => {
          state.mainShoes.forEach((shoes) => {
            shoes.sizes.forEach((size) => {
              filterActive.forEach((sizeOfFilter) => {
                if (size === sizeOfFilter && state.addArrs[arr].length === 0) {
                  state.addArrs[arr].push(shoes);
                } else if (size === sizeOfFilter) {
                  let count = 0;
                  state.addArrs[arr].forEach((obj) => {
                    if (obj.id === shoes.id) {
                      count++;
                    }
                  });
                  if (count === 0) {
                    state.addArrs[arr].push(shoes);
                  }
                }
              });
            });
          });
        }
      );
    },
    filterColor(state, action) {
      templateFilter(
        state,
        action.payload,
        "arrColor",
        (state, filterActive, arr) => {
          state.mainShoes.forEach((shoes) => {
            shoes.colors.forEach((color) => {
              filterActive.forEach((colorOfFilter) => {
                if (
                  color === colorOfFilter &&
                  state.addArrs[arr].length === 0
                ) {
                  state.addArrs[arr].push(shoes);
                } else if (color === colorOfFilter) {
                  let count = 0;
                  state.addArrs[arr].forEach((obj) => {
                    if (obj.id === shoes.id) {
                      count++;
                    }
                  });
                  if (count === 0) {
                    state.addArrs[arr].push(shoes);
                  }
                }
              });
            });
          });
        }
      );
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
  deleteFilter,
  sort,
  setSortBy,
} = shoesSlice.actions;
export default shoesSlice.reducer;
