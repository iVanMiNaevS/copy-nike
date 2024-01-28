import React from "react";
import { useState } from "react";
import styles from "../filters.module.css";
import { useDispatch } from "react-redux";
import {
  addFilter,
  switchFilter,
  deleteFilter,
} from "../../../../../store/slices/shoesSlice";

function CheckBoxColor({ color }) {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  return (
    <button
      key={color.color}
      onClick={() => {
        if (toggle) {
          dispatch(deleteFilter({ id: "colors", value: color.color }));
          dispatch(switchFilter({ id: "colors" }));
        } else {
          console.log(toggle);
          dispatch(addFilter({ id: "colors", value: color.color }));
          dispatch(switchFilter({ id: "colors" }));
        }

        setToggle(!toggle);
      }}
    >
      {color.color === "white" ? (
        <div
          className={
            toggle ? `${styles.color} ${styles.toggleWhite}` : styles.color
          }
          style={{ backgroundColor: color.color }}
        >
          ✓
        </div>
      ) : (
        <div
          className={toggle ? `${styles.color} ${styles.toggle}` : styles.color}
          style={{ backgroundColor: color.color }}
        >
          ✓
        </div>
      )}

      <div className={styles.nameColor}>{color.color}</div>
    </button>
  );
}

export default CheckBoxColor;
