import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { joinClasses } from "../../../../../utils/joinClasses";
import styles from "../filters.module.css";
function Filter({ children, classOut, headerTitle, whatFilter }) {
  const [open, setOpen] = useState(false);

  const countActiveFilters = useSelector(
    (store) => store.shoes.filtersActive[whatFilter].length
  );
  return (
    <div
      className={
        open
          ? joinClasses(styles[classOut], styles.filter, styles.open)
          : joinClasses(styles[classOut], styles.filter)
      }
    >
      <div className={styles.header} onClick={(e) => setOpen(!open)}>
        <span>
          {headerTitle}{" "}
          {countActiveFilters === 0 ? "" : "(" + countActiveFilters + ")"}
        </span>
        <i className="bx bxs-down-arrow"></i>
      </div>
      {children}
    </div>
  );
}

export default Filter;
