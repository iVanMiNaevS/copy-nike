import React from "react";
import styles from "./Header.module.css";

function Sort({ setOpen, sortBy }) {
  return (
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
  );
}

export default Sort;
