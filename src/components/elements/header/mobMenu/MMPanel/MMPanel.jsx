import React from "react";
import { Link } from "react-router-dom";
import styles from "./MMPanel.module.css";

function MMPanel({ panelLinks, changeContent, lastPanel }) {
  return (
    <div className={styles.panel}>
      <div className={styles.panelHeader}>
        <i className="bx bx-chevron-left"></i>
        <div>{panelLinks.prevPanel}</div>
      </div>
      <div className={styles.panelTitle}>{panelLinks.title}</div>
      <ul className={styles.panelLinks}>
        {panelLinks.links.map((link, index) => {
          if (!lastPanel) {
            return (
              <li
                key={index}
                className={styles.panelLink}
                onClick={() => {
                  changeContent(link, panelLinks.title);
                }}
              >
                <span>{link}</span>
                <i className="bx bx-chevron-right"></i>
              </li>
            );
          } else {
            return (
              <Link to={"#"} key={index} className={styles.panelLink}>
                <span>{link}</span>
              </Link>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default MMPanel;
