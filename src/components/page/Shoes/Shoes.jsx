import React from "react";
import Filters from "./filters/Filters";
import Header from "./header/Header";
import styles from "./shoes.module.css";
import ShoesPart from "./shoesPart/ShoesPart";
import { useState } from "react";
import { joinClasses } from "../../../utils/joinClasses";
import { useEffect } from "react";
import Sort from "./header/Sort";
function Shoes() {
  const [hideFilters, setHideFilters] = useState(false);
  const [width, setWidth] = useState(window.screen.width);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.screen.width);
    });
    if (width <= 992) {
      document.body.style.overflowX = "hidden";
    } else {
      document.body.style.overflowX = "visible";
    }
    return window.removeEventListener("resize", () => {
      setWidth(window.screen.width);
    });
  }, [width]);
  useEffect(() => {
    if (width <= 992) {
      hideFilters
        ? document.body.classList.add("no-scroll")
        : document.body.classList.remove("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [hideFilters]);
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
          <Filters hideFilters={hideFilters} setHideFilters={setHideFilters} />
          <ShoesPart />
        </div>
      </div>
    </div>
  );
}

export default Shoes;
