import React from "react";
import styles from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { sort, setSortBy } from "../../../../store/slices/shoesSlice";
function BodySort({ setOpen }) {
  const dispatch = useDispatch();
  const sortBy = useSelector((store) => store.shoes.sortBy);
  return (
    <ul>
      <li
        className={sortBy === "Newest" ? styles.ActiveSort : ""}
        onClick={() => {
          dispatch(setSortBy("Newest"));
          dispatch(sort());

          setOpen(false);
        }}
      >
        Newest
      </li>
      <li
        className={sortBy === "High-Low" ? styles.ActiveSort : ""}
        onClick={() => {
          dispatch(setSortBy("High-Low"));
          dispatch(sort());

          setOpen(false);
        }}
      >
        Price: High-Low
      </li>
      <li
        className={sortBy === "Low-High" ? styles.ActiveSort : ""}
        onClick={() => {
          dispatch(setSortBy("Low-High"));
          dispatch(sort());

          setOpen(false);
        }}
      >
        Price: Low-High
      </li>
    </ul>
  );
}

export default BodySort;
