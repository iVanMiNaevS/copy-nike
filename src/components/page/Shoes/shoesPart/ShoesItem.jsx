import React from "react";
import styles from "./shoesPart.module.css";
import { useNavigate } from "react-router-dom";
function ShoesItem({ shoes }) {
  const navigate = useNavigate();
  return (
    <div
      className={styles.item}
      data-id={shoes.id}
      onClick={() => {
        navigate(`/shoes/${shoes.id}`);
      }}
    >
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
