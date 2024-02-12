import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function CardProduct() {
  const params = useParams();
  const shoes = useSelector((store) => store.shoes.shoes);
  const item = shoes.find((el) => el.id === Number(params.id));
  console.log(item);
  return <div></div>;
}

export default CardProduct;
