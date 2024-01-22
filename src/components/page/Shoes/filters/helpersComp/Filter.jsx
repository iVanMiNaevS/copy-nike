import React from "react";
import { useState } from "react";
import { joinClasses } from "../../../../../utils/joinClasses";
import styles from "../filters.module.css";
function Filter({ children, classOut, headerTitle }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={
        open
          ? joinClasses(styles[classOut], styles.filter, styles.open)
          : joinClasses(styles[classOut], styles.filter)
      }
    >
      <div className={styles.header} onClick={(e) => setOpen(!open)}>
        <span>{headerTitle}</span>
        <i className="bx bxs-down-arrow"></i>
      </div>
      {children}
    </div>
  );
}

export default Filter;
