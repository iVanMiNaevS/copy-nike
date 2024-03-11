import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyButton from "../../../UI/MyButton/MyButton";
import styles from "./BasketItem.module.css";
import { countItem } from "../../../../store/slices/basketSlice";

function Counter({ item }) {
  const count = item.count;
  const dispatch = useDispatch();

  return (
    <div className={styles.counter}>
      <MyButton
        stylesOut={styles.bt}
        onClick={() => {
          count > 1 &&
            dispatch(countItem({ id: item.idInBasket, count: count - 1 }));
        }}
      >
        -
      </MyButton>
      <div className={styles.count}>{count}</div>
      <MyButton
        stylesOut={styles.bt}
        onClick={() => {
          dispatch(countItem({ id: item.idInBasket, count: count + 1 }));
        }}
      >
        +
      </MyButton>
    </div>
  );
}

export default Counter;
