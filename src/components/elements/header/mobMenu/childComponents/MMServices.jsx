import React from "react";
import { Link } from "react-router-dom";
import styles from "../MobMenu.module.css";
import { useSelector } from "react-redux";
function MMServices() {
  const countOrders = useSelector((store) => store.basket.items.length);
  return (
    <div>
      <div className={styles.item}>
        <Link to={"basket"}>
          <i
            className={`text-3xl bx bx-shopping-bag hover:text-white transiton ${
              countOrders > 0 ? styles.bagIcon : ""
            }`}
            countorders={countOrders}
          ></i>
          <span to={"/basket"}> Bag</span>
        </Link>
      </div>
      <div className={styles.item}>
        <i className="text-3xl bx bx-package"></i>
        <Link to={"#"}>Orders</Link>
      </div>
      <div className={styles.item}>
        <i className="text-3xl bx bx-store-alt"></i>
        <Link to={"#"}>Find in store</Link>
      </div>
      <div className={styles.item}>
        <i className="text-3xl bx bx-question-mark"></i>
        <Link to={"#"}>Help</Link>
      </div>
    </div>
  );
}

export default MMServices;
