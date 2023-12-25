import React from "react";
import styles from "./MobMenu.module.css";
function MMLink({ text }) {
  return (
    <li className={styles.link}>
      <span>{text}</span>
      <i className="bx bx-chevron-right"></i>
    </li>
  );
}

export default MMLink;
