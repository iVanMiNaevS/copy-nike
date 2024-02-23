import React from "react";
import style from "./Colors.module.css";
function Colors({ colors }) {
  return (
    <div className="flex gap-4">
      {colors.map((color) => {
        return (
          <div
            className={style.color}
            style={{
              background:
                color !== "multi"
                  ? color
                  : "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
            }}
          ></div>
        );
      })}
    </div>
  );
}

export default Colors;
