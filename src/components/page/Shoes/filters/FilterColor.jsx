import React from "react";
import styles from "./filters.module.css";
import { joinClasses } from "../../../../utils/joinClasses";
import Filter from "./helpersComp/Filter";
import { useState } from "react";
import CheckBoxColor from "./helpersComp/CheckBoxColor";
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
  const [toggleMC, setToggleMC] = useState(false);
  return (
    <Filter classOut={"filterColor"} headerTitle="Colors">
      <div className={joinClasses(styles.bodyColor, styles.body)}>
        {colors.map((color) => {
          return <CheckBoxColor key={color.color} color={color} />;
        })}
        <button
          onClick={() => {
            setToggleMC(!toggleMC);
          }}
        >
          <div
            className={
              toggleMC
                ? joinClasses(styles.color, styles.MultiColor, styles.toggle)
                : joinClasses(styles.color, styles.MultiColor)
            }
          >
            ✓
          </div>
          <div className={styles.nameColor}>Multi-color</div>
        </button>
      </div>
    </Filter>
  );
}

export default FilterColor;
