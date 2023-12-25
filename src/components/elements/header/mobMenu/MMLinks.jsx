import React from "react";
import MMLink from "./MMLink";
import links from "../linksForHeader";
import styles from "./MobMenu.module.css";
function MMLinks() {
  return (
    <ul className={styles.links}>
      {links.map((link) => (
        <MMLink key={link.id} text={link.text} />
      ))}
    </ul>
  );
}

export default MMLinks;
