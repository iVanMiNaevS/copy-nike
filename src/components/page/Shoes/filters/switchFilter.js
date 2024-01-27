// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addFilter,
//   filterGender,
//   joinALLFiltersArr,
// } from "../../../../store/slices/shoesSlice";

// const dispatch = useDispatch();
// export default function useSwitchFilter(title, value, key) {
//   const filterActive = useSelector((state) => state.shoes.filterActive);
//   dispatch(addFilter(key, value));
//   switch (title) {
//     case "Gender":
//       dispatch(filterGender(filterActive));

//       break;
//     default:
//       dispatch(joinALLFiltersArr());
//       break;
//   }
// }
