import React from "react";
import MyButton from "../../../UI/MyButton/MyButton";
import styles from "./BasketItem.module.css";
import Counter from "./Counter";
function BasketItem({ item }) {
  return (
    <div className={styles.BasketItem}>
      <div className={styles.leftPart}>
        <img src={item.imgs[0]} alt="order" />
        <div className={styles.options}>
          <div className={styles.name}>{item.name}</div>
          <div className={styles.size}>Size: {item.options.size}</div>
          <div className={styles.color}>Color: {item.options.color}</div>
        </div>

        <div className={styles.price}>${item.price}</div>
      </div>
      <div className={styles.functional}>
        <Counter />
        <MyButton stylesOut={styles.delete}>
          <i className="bx bx-trash"></i>
        </MyButton>
      </div>
    </div>
  );
}

export default BasketItem;
