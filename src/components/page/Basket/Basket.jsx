import React from "react";
import styles from "./basket.module.css";
import { useSelector } from "react-redux";
import BasketItem from "./BasketItem/BasketItem";
import MyButton from "../../UI/MyButton/MyButton";
import MyButtonLink from "../../UI/MyButton-Link/MyButtonLink";
import { useState } from "react";
function Basket() {
  const items = useSelector((store) => {
    return store.basket.items;
  });
  // const [res, setRes] = useState(0);
  let res = 0;
  items.forEach((item) => {
    res += item.price;
  });

  if (items.length === 0) {
    return (
      <div className="wrapper">
        <div className={styles.emptyContainer}>
          <h2>Корзина пуста ( </h2>
          <MyButtonLink to={"/shoes"}>В каталог</MyButtonLink>
        </div>
      </div>
    );
  }
  return (
    <div className="wrapper">
      <div className={styles.basket}>
        <div className={styles.items}>
          {items.map((item) => {
            return <BasketItem key={item.id} item={item} />;
          })}
        </div>
        <div className={styles.decoration}>
          <MyButton stylesOut={styles.decbt}>Перейти к оформлению</MyButton>
          <div className={styles.info}>
            <div className="mt-5 text-3xl font-semibold text-white">
              Ваша корзина
            </div>
            <div className="flex justify-between pt-10 text-lg text-white">
              <span className="">Товары ({items.length})</span>
              <span className={styles.fullPrice}>${Math.trunc(res)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basket;
