import React from "react";
import { useState } from "react";
import styles from "../filters.module.css";
function CheckBoxColor({ color }) {
  const [toggle, setToggle] = useState(false);
  return (
    <button
      key={color.color}
      onClick={() => {
        setToggle(!toggle);
      }}
    >
      <div
        className={toggle ? `${styles.color} ${styles.toggle}` : styles.color}
        style={{ backgroundColor: color.color }}
      >
        ✓
      </div>
      <div className={styles.nameColor}>{color.color}</div>
    </button>
  );
}

export default CheckBoxColor;
