import React from "react";
import { useState } from "react";
import MyButton from "../../../UI/MyButton/MyButton";
import styles from "./BasketItem.module.css";

function Counter() {
  const [count, setCount] = useState(1);
  return (
    <div className={styles.counter}>
      <MyButton stylesOut={styles.bt}>-</MyButton>
      <div className={styles.count}>{count}</div>
      <MyButton stylesOut={styles.bt}>+</MyButton>
    </div>
  );
}

export default Counter;
