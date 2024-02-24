import React from "react";
import style from "./Gallery.module.css";
function Gallery({ imgs }) {
  return (
    <div className={style.container}>
      <div className={style.addImgs}>
        {imgs.map((img, index) => {
          return (
            <img
              className={style.addImg}
              alt="shoes"
              src={img}
              key={index}
            ></img>
          );
        })}
      </div>
      <img className={style.mainImgs} alt="shoes" src={imgs[0]}></img>
    </div>
  );
}

export default Gallery;
