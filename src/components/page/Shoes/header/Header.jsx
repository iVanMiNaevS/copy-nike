import React from "react";
import { useState } from "react";
import styles from "./Header.module.css";
import Sort from "./Sort";
import { joinClasses } from "../../../../utils/joinClasses";
function Header({ setHideFilters }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.header}>
      <h1 className={styles.titlePage}>Shoes (1800)</h1>
      <div className={styles.rightPart}>
        <button
          className={styles.hideFilters}
          onClick={() => {
            setHideFilters((prev) => !prev);
          }}
        >
          <span>Hide filter</span>
          <img src={require("../../../../img/filter-ico.png")} alt="" />
        </button>
        <Sort openDropdown={setOpen} />
      </div>
      <div
        className={
          open ? joinClasses(styles.dropDown, styles.open) : styles.dropDown
        }
      >
        <ul>
          <li>Newest</li>
          <li>Price: High-Low</li>
          <li>Price: Low-High</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
