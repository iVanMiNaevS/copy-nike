import React from "react";
import Filters from "./filters/Filters";
import Header from "./header/Header";
import styles from "./shoes.module.css";
import ShoesPart from "./shoesPart/ShoesPart";
function Shoes() {
  return (
    <div className={styles.shoesPage}>
      <div className="wrapper">
        <div className={styles.wrapperShoesPage}>
          <Header />
          <Filters />
          <ShoesPart />
        </div>
      </div>
    </div>
  );
}

export default Shoes;
