import React from "react";
import { Link } from "react-router-dom";
import styles from "./MobMenu.module.css";
function MMServices() {
  return (
    <div>
      <div className={styles.item}>
        <i className="bx bx-shopping-bag text-3xl"></i>
        <Link to={"#"}>Bag</Link>
      </div>
      <div className={styles.item}>
        <i className="bx bx-package text-3xl"></i>
        <Link to={"#"}>Orders</Link>
      </div>
      <div className={styles.item}>
        <i className="bx bx-store-alt text-3xl"></i>
        <Link to={"#"}>Find in store</Link>
      </div>
      <div className={styles.item}>
        <i className="bx bx-question-mark text-3xl"></i>
        <Link to={"#"}>Help</Link>
      </div>
    </div>
  );
}

export default MMServices;
