import React from "react";
import styles from "./filters.module.css";
function FilterSize() {
  const size = [
    "38",
    "38.5",
    "39",
    "40",
    "40.5",
    "41",
    "42",
    "43",
    "43.5",
    "44",
    "45",
  ];
  return (
    <div className={styles.filterSize}>
      <div className={styles.header}>
        <span>Size</span>
        <i className="bx bxs-down-arrow"></i>
      </div>
      <div className={styles.body}>
        {size.map((size) => {
          return (
            <button key={size} className={styles.checkBoxSize}>
              {size}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default FilterSize;
