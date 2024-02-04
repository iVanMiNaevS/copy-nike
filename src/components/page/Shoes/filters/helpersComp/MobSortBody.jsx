import React from "react";
import styles from "../filters.module.css";
import { useDispatch, useSelector } from "react-redux";
import { sort, setSortBy } from "../../../../../store/slices/shoesSlice";
function MobSortBody() {
  const dispatch = useDispatch();
  const sortBy = useSelector((store) => store.shoes.sortBy);
  return (
    <ul>
      <li
        className={sortBy === "Newest" ? styles.ActiveSort : ""}
        onClick={() => {
          dispatch(setSortBy("Newest"));
          dispatch(sort());
        }}
      >
        <span className={sortBy === "Newest" ? styles.ActiveSort : ""}>⚪</span>
        Newest
      </li>
      <li
        className={sortBy === "High-Low" ? styles.ActiveSort : ""}
        onClick={() => {
          dispatch(setSortBy("High-Low"));
          dispatch(sort());
        }}
      >
        <span className={sortBy === "High-Low" ? styles.ActiveSort : ""}>
          ⚪
        </span>
        Price: High-Low
      </li>
      <li
        className={sortBy === "Low-High" ? styles.ActiveSort : ""}
        onClick={() => {
          dispatch(setSortBy("Low-High"));
          dispatch(sort());
        }}
      >
        <span className={sortBy === "Low-High" ? styles.ActiveSort : ""}>
          ⚪
        </span>
        Price: Low-High
      </li>
    </ul>
  );
}

export default MobSortBody;
