import React from "react";
import style from "./Sizes.module.css";
function Sizes({ sizes }) {
  return (
    <div className={style.container}>
      {sizes.map((size) => {
        return (
          <div className={style.size} key={size}>
            {size}
          </div>
        );
      })}
    </div>
  );
}

export default Sizes;
