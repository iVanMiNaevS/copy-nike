import React from "react";
import style from "./Sizes.module.css";
function Sizes({ sizes, setOptionsItem, activeSize }) {
  return (
    <div className={style.container}>
      {sizes.map((size) => {
        return (
          <div
            className={
              size === activeSize ? `${style.size} ${style.active}` : style.size
            }
            key={size}
            onClick={() => {
              setOptionsItem("size", size);
            }}
          >
            {size}
          </div>
        );
      })}
    </div>
  );
}

export default Sizes;
