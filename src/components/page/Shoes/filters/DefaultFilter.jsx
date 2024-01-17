import React from "react";
import styles from "./filters.module.css";
function DefaultFilter({ filter }) {
  return (
    <div className={styles.defaultFilter}>
      <div className={styles.header}>
        <span>{filter.title}</span>
        <i className="bx bxs-down-arrow"></i>
      </div>
      <div className={styles.body}>
        {filter.property.map((prop) => {
          return (
            <button key={prop}>
              <div className={styles.checkBox}></div>
              <span>{prop}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default DefaultFilter;
