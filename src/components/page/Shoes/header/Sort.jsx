import React from "react";
import styles from "./Header.module.css";

function Sort() {
  return (
    <button className={styles.sort}>
      <span>Sort</span>
      <i className="bx bxs-down-arrow"></i>
    </button>
  );
}

export default Sort;
