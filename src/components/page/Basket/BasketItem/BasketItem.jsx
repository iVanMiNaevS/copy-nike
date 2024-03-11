import React from "react";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../../../store/slices/basketSlice";
import MyButton from "../../../UI/MyButton/MyButton";
import styles from "./BasketItem.module.css";
import Counter from "./Counter";
function BasketItem({ item }) {
  const dispatch = useDispatch();
  return (
    <div className={styles.BasketItem}>
      <div className={styles.leftPart}>
        <img src={item.imgs[0]} alt="order" />
        <div className={styles.options}>
          <div className={styles.name}>{item.name}</div>
          <div className={styles.size}>Size: {item.options.size}</div>
          <div className={styles.color}>Color: {item.options.color}</div>
          <div className={styles.MobPrice}>${item.price}</div>
        </div>

        <div className={styles.price}>${item.price}</div>
      </div>
      <div className={styles.functional}>
        <Counter item={item} />
        <MyButton
          stylesOut={styles.delete}
          onClick={() => {
            dispatch(deleteItem({ id: item.idInBasket }));
          }}
        >
          <i className="bx bx-trash"></i>
        </MyButton>
      </div>
    </div>
  );
}

export default BasketItem;
