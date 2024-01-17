import React from "react";
import styles from "./filters.module.css";
import { joinClasses } from "../../../../utils/joinClasses";
function FilterColor() {
  const colors = [
    { color: "black" },
    { color: "grey" },
    { color: "green" },
    { color: "red" },
    { color: "yellow" },
    { color: "pink" },
    { color: "purple" },
    { color: "white" },
    { color: "orange" },
    { color: "blue" },
    { color: "brown" },
  ];
  return (
    <div className={styles.filterColor}>
      <div className={styles.header}>
        <span>Size</span>
        <i className="bx bxs-down-arrow"></i>
      </div>
      <div className={styles.body}>
        {colors.map((color) => {
          return (
            <button key={color.color}>
              <div
                className={styles.color}
                style={{ backgroundColor: color.color }}
              ></div>
              <div className={styles.nameColor}>{color.color}</div>
            </button>
          );
        })}
        <button>
          <div className={joinClasses(styles.color, styles.MultiColor)}></div>
          <div className={styles.nameColor}>Multi - color</div>
        </button>
      </div>
    </div>
  );
}

export default FilterColor;
