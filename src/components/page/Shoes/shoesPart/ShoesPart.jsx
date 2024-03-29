import React from "react";
import { useSelector } from "react-redux";
import ShoesItem from "./ShoesItem";
import styles from "./shoesPart.module.css";
function ShoesPart() {
  const shoes = useSelector((store) => store.shoes.shoes);
  return (
    <div className={styles.shoesPart}>
      {shoes.length === 0 ? (
        <h1 className={styles.noSneakers}>"There are no such sneakers yet"</h1>
      ) : (
        shoes.map((shoes) => {
          return <ShoesItem key={shoes.id} shoes={shoes} />;
        })
      )}
    </div>
  );
}

export default ShoesPart;
