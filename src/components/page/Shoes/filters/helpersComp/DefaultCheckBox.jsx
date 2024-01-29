import React from "react";
import styles from "../filters.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addFilter,
  deleteFilter,
  switchFilter,
} from "../../../../../store/slices/shoesSlice";

function DefaultCheckBox({ prop, id }) {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();

  // const [filtersActive, setFiltersActive] = useState({
  //   gender: ["Men", "Women"],
  //   height: ["Low"],
  //   // price: ["$0 - $50", "$100 - $150"],
  // });
  return (
    <button
      key={prop.str}
      onClick={() => {
        if (toggle) {
          dispatch(deleteFilter({ id, value: prop.id }));
          dispatch(switchFilter({ id }));
        } else {
          dispatch(addFilter({ id, value: prop.id }));
          dispatch(switchFilter({ id }));
        }
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
      <span>{prop.str}</span>
    </button>
  );
}

export default DefaultCheckBox;
