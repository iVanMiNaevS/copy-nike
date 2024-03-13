import React from "react";
import { useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import MyButton from "../../UI/MyButton/MyButton";
function Search() {
  const [value, setValue] = useState("");
  const [openSearch, setOpenSearch] = useState(false);
  const popularTerms = ["Jordan", "Air Force"];
  return (
    <div
      className={
        openSearch
          ? `${styles.searchContainer} ${styles.openSearchContainer}`
          : styles.searchContainer
      }
      onClick={(e) => {
        if (e.target.closest(".target")) {
          setOpenSearch(false);
          setValue("");
        }
      }}
    >
      <div className={styles.separator}>
        <div className="wrapper">
          <div className={styles.searchWrapper}>
            <div className={styles.searchHeader}>
              <Link to={"/"} className={styles.iconSr}>
                <img
                  src={require("../../../img/holl-page/jordan-icon.png")}
                  alt="men"
                  width={"60px"}
                />
              </Link>
              <input
                placeholder="Search"
                className={styles.search1}
                onChange={(e) => {
                  setValue(e.target.value);
                  if (e.target.value.length === 1) {
                    setOpenSearch(true);
                  }
                }}
                value={value}
              />
              <MyButton
                onClick={() => {
                  setOpenSearch(false);
                  setValue("");
                }}
                stylesOut={styles.closeBt}
              >
                Close
              </MyButton>
            </div>
            <div className={styles.content}>
              <div className={styles.terms}>
                <div className={styles.title}>Popular Search Terms</div>
                {popularTerms.map((el) => {
                  return (
                    <div key={el} className={styles.popularTerms}>
                      <a
                        onClick={(e) => {
                          setValue(e.target.innerHTML);
                        }}
                      >
                        {el}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          openSearch
            ? `${styles.blurSearch} ${styles.openBlurSearch} target`
            : styles.blurSearch
        }
      ></div>
    </div>
  );
}

export default Search;
