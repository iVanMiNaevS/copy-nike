import React from "react";
import style from "./Colors.module.css";
function Colors({ colors, setOptionsItem, activeColor }) {
  return (
    <div className="flex gap-4">
      {colors.map((color) => {
        return (
          <div
            className={
              color === activeColor
                ? `${style.color} ${style.activeBlack}`
                : style.color
            }
            style={{
              background:
                color !== "multi"
                  ? color
                  : "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
            }}
            key={color}
            onClick={() => {
              setOptionsItem("color", color);
            }}
          ></div>
        );
      })}
    </div>
  );
}

export default Colors;
