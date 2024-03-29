import React from "react";
import styles from "./filters.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { filterGender } from "../../../../store/slices/shoesSlice";
import Filter from "./helpersComp/Filter";
import { joinClasses } from "../../../../utils/joinClasses";
import DefaultCheckBox from "./helpersComp/DefaultCheckBox";
function DefaultFilter({ filter }) {
  return (
    <Filter
      classOut={"defaultFilter"}
      headerTitle={filter.title}
      whatFilter={filter.id}
    >
      <div className={joinClasses(styles.defaultBody, styles.body)}>
        {filter.property.map((prop) => {
          return <DefaultCheckBox key={prop.str} prop={prop} id={filter.id} />;
        })}
      </div>
    </Filter>
  );
}

export default DefaultFilter;
