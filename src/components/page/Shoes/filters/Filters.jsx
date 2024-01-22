import React from "react";
import { useEffect, useState } from "react";
import DefaultFilter from "./DefaultFilter";
import FilterColor from "./FilterColor";
import styles from "./filters.module.css";
import FilterSize from "./FilterSize";
import { useDispatch } from "react-redux";
import { filterGender } from "../../../../store/slices/shoesSlice";
import { joinClasses } from "../../../../utils/joinClasses";
import { useRef } from "react";

function Filters({ hideFilters }) {
  const filters = [
    { title: "Gender", property: ["Men", "Women", "Unisex"], id: 1 },
    {
      title: "Shop By Price",
      property: ["$0 - $50", "$50 - $100", "$100 - $150", "$150+"],
      id: 2,
    },
    {
      title: "Shoe Height",
      property: ["Low Top", "Mid Top", "High Top"],
      id: 3,
    },
  ];

  return (
    <div
      className={
        hideFilters
          ? joinClasses(styles.filters, styles.hideFilters) //не сделал анимацию
          : styles.filters
      }
    >
      {filters.map((filter) => {
        return <DefaultFilter key={filter.id} filter={filter} />;
      })}
      <FilterSize />
      <FilterColor />
    </div>
  );
}

export default Filters;
