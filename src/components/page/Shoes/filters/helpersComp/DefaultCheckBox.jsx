import React from "react";
import styles from "../filters.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  filterGender,
  filterHeight,
  filterPrice,
  joinALLFiltersArr,
} from "../../../../../store/slices/shoesSlice";

function DefaultCheckBox({ prop, title }) {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();

  const [filtersActive, setFiltersActive] = useState({
    gender: ["Men", "Women"],
    height: ["Low"],
    // price: ["$0 - $50", "$100 - $150"],
  });
  return (
    <button
      key={prop}
      onClick={() => {
        // создать отдельно функцию которая по заголовку выбирает какой  фильтр добавить и какую функцию вызвать  и тогда не нужно много
        // диспач импортировать. Так же filtersActive можно вынести в redux
        dispatch(filterGender(filtersActive.gender));
        dispatch(filterHeight(filtersActive.height));
        // dispatch(filterPrice(filtersActive.price));
        dispatch(joinALLFiltersArr());
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
