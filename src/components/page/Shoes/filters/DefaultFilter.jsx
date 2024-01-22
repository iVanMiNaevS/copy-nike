import React from "react";
import styles from "./filters.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { filterGender } from "../../../../store/slices/shoesSlice";
import Filter from "./helpersComp/Filter";
import { joinClasses } from "../../../../utils/joinClasses";
function DefaultFilter({ filter }) {
  const dispatch = useDispatch();

  const [filtersActive, setFiltersActive] = useState([
    { key: "gender", value: "Men" },
    { key: "gender", value: "Women" },
    { key: "height", value: "Low" },
  ]);

  return (
    <Filter classOut={"defaultFilter"} headerTitle={filter.title}>
      <div className={joinClasses(styles.defaultBody, styles.body)}>
        {filter.property.map((prop) => {
          return (
            <button
              key={prop}
              onClick={() => {
                dispatch(filterGender(filtersActive));
              }}
            >
              <div className={styles.checkBox}></div>
              <span>{prop}</span>
            </button>
          );
        })}
      </div>
    </Filter>
  );
}

export default DefaultFilter;
