import React from "react";
import styles from "./MySlider.module.css";
import { useRef } from "react";
import { joinClasses } from "../../../utils/joinClasses";
function MySlider({ items, buttons }) {
  const slider = useRef(null);
  function scrollLeftSlider() {
    const gap =
      (slider.current.offsetWidth -
        ((slider.current.offsetWidth * 30) / 100) * 3) /
      2;
    slider.current.scrollLeft -= (slider.current.offsetWidth * 30) / 100 + gap;
  }
  function scrollRightSlider() {
    const gap =
      (slider.current.offsetWidth -
        ((slider.current.offsetWidth * 30) / 100) * 3) /
      2;
    slider.current.scrollLeft += (slider.current.offsetWidth * 30) / 100 + gap;
  }
  function pickButtons() {
    if (!buttons) {
      return (
        <div
          className={joinClasses("text-right mb-5 relative", styles.buttons)}
        >
          <i
            className={joinClasses(
              "bx bx-left-arrow-circle text-8xl  text-lightGreen cursor-pointer hover:text-ctGreen",
              styles.button
            )}
            onClick={() => {
              scrollLeftSlider();
            }}
          ></i>
          <i
            className={joinClasses(
              "bx bx-right-arrow-circle text-8xl  text-lightGreen cursor-pointer hover:text-ctGreen",
              styles.button
            )}
            onClick={() => {
              scrollRightSlider();
            }}
          ></i>
        </div>
      );
    } else if (buttons === "none") {
      return null;
    } else {
      return (
        <div
          className={joinClasses("text-right mb-5 relative", styles.buttons)}
        >
          {buttons}
        </div>
      );
    }
  }
  return (
    <>
      {pickButtons()}
      <div className={styles.slider} ref={slider}>
        {items.map((item, index) => {
          return (
            <div className={styles.item} key={index}>
              <div className={styles.art}>
                <img src={item.img} alt="img"></img>
              </div>
              <div className={joinClasses(styles.text, item.stylesText)}>
                {item.text}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MySlider;
