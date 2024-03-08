import React from "react";
import Filters from "./filters/Filters";
import Header from "./header/Header";
import styles from "./shoes.module.css";
import ShoesPart from "./shoesPart/ShoesPart";
import { useState } from "react";
import { joinClasses } from "../../../utils/joinClasses";
import { useEffect } from "react";
import { useRef } from "react";
import { useSetOverFlowBody } from "../../../hooks/useSetOverFlowBody";
function Shoes() {
  const [hideFilters, setHideFilters] = useState(false);
  const width = window.screen.width;
  useSetOverFlowBody();
  useEffect(() => {
    if (width <= 992) {
      hideFilters
        ? document.body.classList.add("no-scroll")
        : document.body.classList.remove("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [hideFilters]);
  if (width <= 992) {
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
            <Filters
              hideFilters={hideFilters}
              setHideFilters={setHideFilters}
              mobScreen={true}
            />
            <ShoesPart />
          </div>
        </div>
      </div>
    );
  }
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
          <Filters
            hideFilters={hideFilters}
            setHideFilters={setHideFilters}
            mobScreen={false}
          />
          <ShoesPart />
        </div>
      </div>
    </div>
  );
}

export default Shoes;
