import React from "react";
import styles from "./filters.module.css";
import { joinClasses } from "../../../../utils/joinClasses";
import Filter from "./helpersComp/Filter";
function FilterColor() {
  const colors = [
    { color: "black" },
    { color: "gray" },
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
    <Filter classOut={"filterColor"} headerTitle="Colors">
      <div className={joinClasses(styles.bodyColor, styles.body)}>
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
    </Filter>
  );
}

export default FilterColor;
