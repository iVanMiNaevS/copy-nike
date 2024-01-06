import React from "react";
import { joinClasses } from "../../../utils/joinClasses";
import styles from "./myButton.module.css";
function MyButton({ children, stylesOut, ...props }) {
  return (
    <button {...props} className={joinClasses(styles.myBt, stylesOut)}>
      {children}
    </button>
  );
}

export default MyButton;
