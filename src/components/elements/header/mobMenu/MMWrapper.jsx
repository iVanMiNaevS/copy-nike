import React from "react";
import styles from "./MobMenu.module.css";
import { joinClasses } from "../../../../utils/joinClasses";

import MobMenu from "./MobMenu";

function MMWrapper({ toggleMenu, open }) {
  return (
    <div
      className={joinClasses(styles.wrapperForScroll, open ? styles.open : "")}
    >
      <div className={joinClasses(styles.wrapper, open ? styles.open : "")}>
        <div className={styles.mobMenuBlur}></div>
        <MobMenu toggleMenu={toggleMenu} />
      </div>
    </div>
  );
}

export default MMWrapper;
