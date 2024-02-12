import React from "react";
import Filters from "./filters/Filters";
import Header from "./header/Header";
import styles from "./shoes.module.css";
import ShoesPart from "./shoesPart/ShoesPart";
import { useState } from "react";
import { joinClasses } from "../../../utils/joinClasses";
import { useEffect } from "react";
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
      // setMobScreen(false);
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
