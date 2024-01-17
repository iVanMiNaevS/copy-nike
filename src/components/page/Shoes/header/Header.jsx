import React from "react";
import styles from "./Header.module.css";
import Sort from "./Sort";
function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.titlePage}>Shoes (1800)</h1>
      <div className={styles.rightPart}>
        <button className={styles.hideFilters}>
          <span>Hide filter</span>
          <img src={require("../../../../img/filter-ico.png")} alt="" />
        </button>
        <Sort />
        <div className={styles.dropDown}>
          <ul>
            <li>Newest</li>
            <li>Price: High-Low</li>
            <li>Price: Low-High</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
