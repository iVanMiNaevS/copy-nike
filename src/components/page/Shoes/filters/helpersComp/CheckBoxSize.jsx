import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addFilter,
  switchFilter,
} from "../../../../../store/slices/shoesSlice";
import styles from "../filters.module.css";
function CheckBoxSize({ size }) {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  return (
    <button
      key={size}
      className={
        toggle ? `${styles.checkBoxSize} ${styles.toggle}` : styles.checkBoxSize
      }
      onClick={() => {
        dispatch(addFilter({ id: "sizes", value: Number(size) }));
        dispatch(switchFilter({ id: "sizes" }));

        setToggle(!toggle);
      }}
    >
      {size}
    </button>
  );
}

export default CheckBoxSize;
