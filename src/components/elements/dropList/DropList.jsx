import React from "react";
import styles from "../dropList/DropList.module.css";
function DropList({ dropListIsOpen, setDropListIsOpen, content }) {
  return (
    <div
      className={
        dropListIsOpen
          ? [styles.dropList, styles.active].join(" ")
          : styles.dropList
      }
    >
      <div
        className={styles.content}
        onMouseLeave={() => setDropListIsOpen(false)}
      >
        <div className="wrapper flex gap-20 justify-center">
          {content &&
            content.map((dropListFromLink, index) => {
              const col = dropListFromLink["col" + (index + 1)];
              return (
                <div className={styles.item} key={index}>
                  <ul>
                    <li>{col.title}</li>
                    {col.links.map((link, index) => {
                      return <li key={index}>{link}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
        </div>
      </div>
      <div
        className={
          !dropListIsOpen
            ? styles.bgBlur
            : [styles.active, styles.bgBlur].join(" ")
        }
      ></div>
    </div>
  );
}

export default DropList;
