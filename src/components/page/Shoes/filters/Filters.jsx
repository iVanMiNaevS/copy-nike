import React from "react";
import DefaultFilter from "./DefaultFilter";
import FilterColor from "./FilterColor";
import styles from "./filters.module.css";
import FilterSize from "./FilterSize";
import { useDispatch } from "react-redux";
import { filterGender } from "../../../../store/slices/shoesSlice";
import { joinClasses } from "../../../../utils/joinClasses";

function Filters({ hideFilters }) {
  const filters = [
    { title: "Gender", property: ["Men", "Women", "Unisex"], id: "gender" },
    {
      title: "Shop By Price",
      property: ["$0 - $50", "$50 - $100", "$100 - $150", "$150+"],
      id: "price",
    },
    {
      title: "Shoe Height",
      property: ["Low Top", "Mid Top", "High Top"],
      id: "height",
    },
  ];

  return (
    <div
      className={
        hideFilters
          ? joinClasses(styles.wrapper, styles.hideFilters) //не сделал анимацию
          : styles.wrapper
      }
    >
      <div className={styles.filters}>
        {filters.map((filter) => {
          return <DefaultFilter key={filter.id} filter={filter} />;
        })}
        <FilterSize />
        <FilterColor />
      </div>
    </div>
  );
}

export default Filters;
