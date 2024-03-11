import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./MMPanel.module.css";

function MMPanel({ panelLinks, changeContent, lastPanel, scrollHandlers }) {
  const panel = useRef(null);
  return (
    <div className={styles.panel} ref={panel}>
      <div
        className={styles.panelHeader}
        onClick={() => scrollHandlers.scrollLeft(panel)}
      >
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
                  scrollHandlers.scrollRight(panel);
                }}
              >
                <Link>{link}</Link>
                <i className="bx bx-chevron-right"></i>
              </li>
            );
          } else {
            return (
              <Link
                to={panelLinks.prevPanel === "Shoes" && "/shoes"}
                key={index}
                className={styles.panelLink}
              >
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
