import React from "react";
import MMLink from "./MMLink";
import links from "../linksForHeader";
import styles from "./MobMenu.module.css";
function MMLinks({ changeContent }) {
  return (
    <ul className={styles.links}>
      {links.map((link) => (
        <MMLink
          key={link.id}
          text={link.text}
          id={link.id}
          changeContent={changeContent}
        />
      ))}
    </ul>
  );
}

export default MMLinks;
