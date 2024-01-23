import React from "react";
import styles from "./filters.module.css";
import { joinClasses } from "../../../../utils/joinClasses";
import Filter from "./helpersComp/Filter";
import CheckBoxSize from "./helpersComp/CheckBoxSize";
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
    <Filter classOut={"filterSize"} headerTitle="Size">
      <div className={joinClasses(styles.bodySize, styles.body)}>
        {size.map((size) => {
          return <CheckBoxSize size={size} />;
        })}
      </div>
    </Filter>
  );
}

export default FilterSize;
