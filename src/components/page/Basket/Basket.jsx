import React from "react";
import styles from "./basket.module.css";
import { useSelector } from "react-redux";
import BasketItem from "./BasketItem/BasketItem";
import MyButton from "../../UI/MyButton/MyButton";
import MyButtonLink from "../../UI/MyButton-Link/MyButtonLink";
import { useState } from "react";
import { useSetOverFlowBody } from "../../../hooks/useSetOverFlowBody";
import { useAuth } from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
function Basket() {
  useSetOverFlowBody();
  const items = useSelector((store) => {
    return store.basket.items;
  });
  function countItems() {
    let res = 0;
    items.forEach((item) => {
      res += item.count;
    });
    return res;
  }
  function countFullPrice() {
    let res = 0;
    items.forEach((item) => {
      res += item.price * item.count;
    });
    return Math.trunc(res);
  }

  const { isAuth } = useAuth();
  const navigate = useNavigate();
  if (items.length === 0) {
    return (
      <div className="wrapper">
        <div className={styles.emptyContainer}>
          <h2>The basket is empty )</h2>
          <MyButtonLink to={"/shoes"}>To the catalog</MyButtonLink>
        </div>
      </div>
    );
  }
  return (
    <div className="wrapper">
      <div className={styles.basket}>
        <div className={styles.items}>
          {items.map((item) => {
            return <BasketItem key={item.idInBasket} item={item} />;
          })}
        </div>
        <div className={styles.decoration}>
          <MyButton
            onClick={() => {
              isAuth ? navigate("/makingOrder") : navigate("/profile");
            }}
            stylesOut={styles.decbt}
          >
            Перейти к оформлению
          </MyButton>
          <div className={styles.info}>
            <div className="mt-5 text-3xl font-semibold text-white">
              Ваша корзина
            </div>
            <div className="flex justify-between pt-10 text-lg text-white">
              <span className="">Товары ({countItems()})</span>
              <span className={styles.fullPrice}>${countFullPrice()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basket;
