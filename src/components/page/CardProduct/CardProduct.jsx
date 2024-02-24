import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import style from "./CardProduct.module.css";
import Gallery from "./gallery/Gallery";
import Sizes from "./sizes/Sizes";
import Colors from "./colorsShoes/Colors";
import { useState, useEffect } from "react";
import { useRef } from "react";
function CardProduct() {
  const params = useParams();
  const shoes = useSelector((store) => store.shoes.shoes);
  const item = shoes.find((el) => el.id === Number(params.id));
  const imgs = [item.img, ...item.addImgs];
  const [width, setWidth] = useState(window.screen.width);
  const bt = useRef(null);

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

  return (
    <div className="wrapper">
      <div className={style.mainWrapper}>
        <Gallery imgs={imgs} />
        <div className={style.namePrice}>
          <div className={style.title}>{item.name}</div>
          <div className={style.price}>${item.price}</div>
        </div>
        <div className={style.select}>
          <div className="">
            <div className="mb-5 text-lg">Select Color</div>
            <Colors colors={item.colors} />
          </div>
          <div>
            <div className="mb-5 text-lg">Select Size</div>
            <Sizes sizes={item.sizes} />
          </div>
          <button className={style.addToBag} ref={bt}>
            Add To Bag
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
