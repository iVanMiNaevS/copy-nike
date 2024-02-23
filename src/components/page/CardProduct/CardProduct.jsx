import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import style from "./CardProduct.module.css";
import Gallery from "./gallery/Gallery";
import Sizes from "./sizes/Sizes";
import Colors from "./colorsShoes/Colors";
function CardProduct() {
  const params = useParams();
  const shoes = useSelector((store) => store.shoes.shoes);
  const item = shoes.find((el) => el.id === Number(params.id));
  const imgs = [item.img, ...item.addImgs];
  console.log(item);
  return (
    <div className="wrapper">
      <div className={style.mainWrapper}>
        <Gallery imgs={imgs} />
        <div className={style.info}>
          <div className="">
            <div className={style.title}>{item.name}</div>
            <div className={style.price}>${item.price}</div>
          </div>
          <div className="">
            <div className="mb-1 text-lg">Select Color</div>
            <Colors colors={item.colors} />
          </div>
          <div>
            <div className="mb-1 text-lg">Select Size</div>
            <Sizes sizes={item.sizes} />
          </div>
          <button className={style.addToBag}>Add To Bag</button>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
