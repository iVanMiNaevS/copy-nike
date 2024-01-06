import React from "react";
import styles from "./MobMenu.module.css";
function MMLink({ text, changeContent, id }) {
  return (
    <li
      className={styles.link}
      onClick={() => {
        changeContent(id);
      }}
    >
      <span>{text}</span>
      <i className="bx bx-chevron-right"></i>
    </li>
  );
}

export default MMLink;
