import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import style from "./CardProduct.module.css";
import Gallery from "./gallery/Gallery";
import Sizes from "./sizes/Sizes";
import Colors from "./colorsShoes/Colors";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { addItem } from "../../../store/slices/basketSlice";
import { useSetOverFlowBody } from "../../../hooks/useSetOverFlowBody";
function CardProduct() {
  const params = useParams();
  const shoes = useSelector((store) => store.shoes.shoes);
  const item = shoes.find((el) => el.id === Number(params.id));
  const [mainImg, setMainImg] = useState(item.img);
  const dispatch = useDispatch();
  const { ref, inView } = useInView({
    threshold: 0,
  });
  useSetOverFlowBody();
  const tesmplateItem = {
    id: item.id,
    name: item.name,
    price: item.price,
    options: { color: "", size: "" },
    imgs: [item.img, ...item.addImgs],
    count: 1,
  };
  const [itemInBasket, setItemInBasket] = useState(tesmplateItem);

  const [pick, setPick] = useState(true);
  function setItem(options, value) {
    setItemInBasket((prev) => {
      return { ...prev, options: { ...prev.options, [options]: value } };
    });
  }
  return (
    <div className="wrapper">
      <div className={style.mainWrapper}>
        <Gallery
          imgs={itemInBasket.imgs}
          mainImg={mainImg}
          setMainImg={setMainImg}
        />
        <div className={style.namePrice}>
          <div className={style.title}>{item.name}</div>
          <div className={style.price}>${item.price}</div>
        </div>
        <div
          className={
            pick ? `${style.select}` : `${style.select} ${style.notPick}`
          }
        >
          <div className={pick.color ? style.notPick : ""}>
            <div className="mb-5 text-lg">Select Color</div>
            <Colors
              colors={item.colors}
              activeColor={itemInBasket.options.color}
              setOptionsItem={setItem}
            />
          </div>
          <div className={pick.size ? style.notPick : ""}>
            <div className="mb-5 text-lg">Select Size</div>
            <Sizes
              sizes={item.sizes}
              activeSize={itemInBasket.options.size}
              setOptionsItem={setItem}
            />
          </div>
          <div className="mt-9">
            <div className={style.observeTarget} ref={ref}></div>
            {!inView && (
              <button className={style.btFullScreen}>Add To Bag</button>
            )}
            <button
              className={style.addToBag}
              onClick={() => {
                const empty = {};
                Object.keys(itemInBasket.options).forEach((key) => {
                  if (itemInBasket.options[key] === "") {
                    empty[key] = true;
                  }
                });
                if (Object.keys(empty).length === 0) {
                  dispatch(
                    addItem({
                      ...itemInBasket,
                    })
                  );
                  setItemInBasket(tesmplateItem);
                  setPick(true);
                } else {
                  setPick(empty);
                }
              }}
            >
              Add To Bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
