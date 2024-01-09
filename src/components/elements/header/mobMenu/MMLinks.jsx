import React from "react";
import MMLink from "./MMLink";
import links from "../linksForHeader";
import styles from "./MobMenu.module.css";
function MMLinks({ changeContent, scrollRightHandler, mainPanel }) {
  return (
    <ul className={styles.links}>
      {links.map((link) => (
        <MMLink
          key={link.id}
          link={link}
          changeContent={changeContent}
          scrollRightHandler={scrollRightHandler}
          mainPanel={mainPanel}
        />
      ))}
    </ul>
  );
}

export default MMLinks;
