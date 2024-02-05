import React from "react";
import DefaultFilter from "./DefaultFilter";
import FilterColor from "./FilterColor";
import styles from "./filters.module.css";
import FilterSize from "./FilterSize";

import { joinClasses } from "../../../../utils/joinClasses";
import MobSort from "./MobSort";

function Filters({ hideFilters, setHideFilters }) {
  const filters = [
    {
      title: "Gender",
      property: [
        { str: "Men", id: "Men" },
        { str: "Women", id: "Women" },
        { str: "Unisex", id: "Unisex" },
      ],
      id: "gender",
    },
    {
      title: "Shop By Price",
      property: [
        { str: "$0 - $50", id: [0, 50] },
        { str: "$50 - $100", id: [50, 100] },
        { str: "$100 - $150", id: [100, 150] },
        { str: "$150+", id: [150, 100000] },
      ],
      id: "price",
    },
    {
      title: "Shoe Height",
      property: [
        { str: "Low Top", id: "Low" },
        { str: "Mid Top", id: "Mid" },
        { str: "High Top", id: "High" },
      ],
      id: "height",
    },
  ];

  return (
    <div
      className={
        !hideFilters
          ? joinClasses(styles.wrapper, styles.hideFilters)
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

      <div className={styles.MobFilters}>
        <div className="w-full mt-4 text-right mb-7">
          <i
            className="text-3xl bx bx-x "
            onClick={() => {
              setHideFilters(!hideFilters);
            }}
          ></i>
        </div>
        <MobSort />
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
