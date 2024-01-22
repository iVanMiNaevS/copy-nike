import React from "react";
import styles from "./Header.module.css";

function Sort({ openDropdown }) {
  return (
    <button
      className={styles.sort}
      onClick={() => {
        openDropdown((prev) => !prev);
      }}
    >
      <span>Sort</span>
      <i className="bx bxs-down-arrow"></i>
    </button>
  );
}

export default Sort;
