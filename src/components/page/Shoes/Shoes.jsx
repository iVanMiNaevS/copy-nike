import React from "react";
import Filters from "./filters/Filters";
import Header from "./header/Header";
import styles from "./shoes.module.css";
import ShoesPart from "./shoesPart/ShoesPart";
import { useState } from "react";
import { joinClasses } from "../../../utils/joinClasses";
function Shoes() {
  const [hideFilters, setHideFilters] = useState(false);
  return (
    <div className={styles.shoesPage}>
      <div className="wrapper">
        <div
          className={
            hideFilters
              ? joinClasses(styles.wrapperShoesPage, styles.hideFilters)
              : styles.wrapperShoesPage
          }
        >
          <Header setHideFilters={setHideFilters} />
          <Filters hideFilters={hideFilters} />
          <ShoesPart />
        </div>
      </div>
    </div>
  );
}

export default Shoes;
