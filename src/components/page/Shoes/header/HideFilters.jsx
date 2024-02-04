import React from "react";
import styles from "./Header.module.css";

function HideFilters({ className, setHideFilters, text }) {
  return (
    <button
      className={styles[className]}
      onClick={() => {
        setHideFilters((prev) => !prev);
      }}
    >
      <span>{text}</span>
      <img src={require("../../../../img/filter-ico.png")} alt="" />
    </button>
  );
}

export default HideFilters;
