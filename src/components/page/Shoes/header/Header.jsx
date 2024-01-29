import React from "react";
import { useState } from "react";
import styles from "./Header.module.css";
import { joinClasses } from "../../../../utils/joinClasses";
import { useDispatch, useSelector } from "react-redux";
import { sort, setSortBy } from "../../../../store/slices/shoesSlice";
import { useRef } from "react";
function Header({ setHideFilters }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const sortBy = useSelector((store) => store.shoes.sortBy);
  return (
    <div className={styles.header}>
      <h1 className={styles.titlePage}>Shoes (1800)</h1>
      <div className={styles.rightPart}>
        <button
          className={styles.hideFilters}
          onClick={() => {
            setHideFilters((prev) => !prev);
          }}
        >
          <span>Hide filter</span>
          <img src={require("../../../../img/filter-ico.png")} alt="" />
        </button>
        <button
          className={styles.sort}
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          {sortBy === "" ? (
            <span>Sort</span>
          ) : (
            <span>
              Sort By: <span className="text-gray-400">{sortBy}</span>
            </span>
          )}

          <i className="bx bxs-down-arrow"></i>
        </button>
      </div>
      <div
        className={
          open ? joinClasses(styles.dropDown, styles.open) : styles.dropDown
        }
      >
        <ul>
          <li
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
      </div>
    </div>
  );
}

export default Header;
