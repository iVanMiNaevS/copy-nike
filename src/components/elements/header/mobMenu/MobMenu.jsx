import React from "react";
import MMLinks from "./MMLinks";
import styles from "./MobMenu.module.css";
function MobMenu() {
  return (
    <div className={styles.mobMenuBlur}>
      <nav className={styles.mobMenu}>
        <div className={styles.close}>
          <i className="bx bx-x"></i>
        </div>

        <MMLinks />
      </nav>
    </div>
  );
}

export default MobMenu;
