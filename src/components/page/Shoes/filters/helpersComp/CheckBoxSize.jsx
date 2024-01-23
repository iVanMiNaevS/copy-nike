import React from "react";
import { useState } from "react";
import styles from "../filters.module.css";
function CheckBoxSize({ size }) {
  const [toggle, setToggle] = useState(false);
  return (
    <button
      key={size}
      className={
        toggle ? `${styles.checkBoxSize} ${styles.toggle}` : styles.checkBoxSize
      }
      onClick={() => {
        setToggle(!toggle);
      }}
    >
      {size}
    </button>
  );
}

export default CheckBoxSize;
