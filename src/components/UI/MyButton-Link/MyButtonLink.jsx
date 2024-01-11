import React from "react";
import { Link } from "react-router-dom";
import { joinClasses } from "../../../utils/joinClasses";
import styles from "./myButtonLink.module.css";
function MyButtonLink({ children, to, stylesOut, ...props }) {
  return (
    <Link className={joinClasses(styles.btLink, stylesOut)} to={to} {...props}>
      {children}
    </Link>
  );
}

export default MyButtonLink;
