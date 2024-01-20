import React from "react";
import styles from "./shoesPart.module.css";
function ShoesItem({ shoes }) {
  return (
    <div className={styles.item} data-id={shoes.id}>
      <img src={shoes.img} alt={"img"}></img>
      <div className={styles.lowerPart}>
        <div className={styles.text}>
          <h4 className={styles.title}>{shoes.name}</h4>
          <p className={styles.countColor}>{shoes.colors.length} colors</p>
        </div>
        <button className={styles.price}>${shoes.price}</button>
      </div>
    </div>
  );
}

export default ShoesItem;
