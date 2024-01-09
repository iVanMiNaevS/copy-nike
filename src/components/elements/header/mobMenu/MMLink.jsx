import React from "react";
import styles from "./MobMenu.module.css";
function MMLink({ link, changeContent, scrollRightHandler, mainPanel }) {
  return (
    <li
      className={styles.link}
      onClick={() => {
        changeContent(link.id);
        scrollRightHandler(mainPanel);
      }}
    >
      <span>{link.text}</span>
      <i className="bx bx-chevron-right"></i>
    </li>
  );
}

export default MMLink;
