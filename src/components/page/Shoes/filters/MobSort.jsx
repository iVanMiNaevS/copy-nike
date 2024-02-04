import React from "react";
import MobSortBody from "./helpersComp/MobSortBody";
import styles from "./filters.module.css";
import { joinClasses } from "../../../../utils/joinClasses";
function MobSort() {
  return (
    <div className={joinClasses(styles.mobSort, styles.filter)}>
      <div className={styles.header}>
        <span>Sort</span>
      </div>
      <MobSortBody />
    </div>
  );
}

export default MobSort;
