import React from "react";
import styles from "../filters.module.css";
import { useState } from "react";

function DefaultCheckBox({ prop }) {
  const [toggle, setToggle] = useState(false);
  return (
    <button
      key={prop}
      onClick={() => {
        // dispatch(filterGender(filtersActive));
        setToggle(!toggle);
      }}
    >
      <div
        className={
          toggle ? `${styles.checkBox} ${styles.toggle}` : styles.checkBox
        }
      >
        ✓
      </div>
      <span>{prop}</span>
    </button>
  );
}

export default DefaultCheckBox;
