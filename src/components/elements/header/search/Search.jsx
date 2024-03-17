import React from "react";
import { useState, useEffect } from "react";
import styles from "../Header.module.css";
import { Link } from "react-router-dom";
import MyButton from "../../../UI/MyButton/MyButton";
import { useSelector } from "react-redux";
import SearchContent from "./SearchContent";
function Search({ value, setValue }) {
  const [shoes, setShoes] = useState([]);
  const Allshoes = useSelector((store) => store.shoes.mainShoes);
  const [openSearch, setOpenSearch] = useState(false);

  useEffect(() => {
    openSearch
      ? document.body.classList.add("no-scroll")
      : document.body.classList.remove("no-scroll");
  }, [openSearch]);

  function findShoes(value) {
    setShoes(
      Allshoes.filter(
        (el) => el.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 && el
      )
    );
  }
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
        <div className={`wrapper ${styles.p}`}>
          <div className={styles.searchWrapper}>
            <div className={styles.searchHeader}>
              <Link to={"/"} className={styles.iconSr}>
                <img
                  src={require("../../../../img/holl-page/jordan-icon.png")}
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
                  } else if (e.target.value.length > 1) {
                    findShoes(e.target.value);
                  }
                }}
                value={value}
              />
              <i
                className={`text-3xl bx bx-search ${styles.iconSearch}`}
                onClick={() => {
                  setOpenSearch(true);
                }}
              ></i>
              <MyButton
                onClick={() => {
                  setOpenSearch(false);
                  setValue("");
                  setShoes([]);
                }}
                stylesOut={styles.closeBt}
              >
                Close
              </MyButton>
            </div>
            <SearchContent
              shoes={shoes}
              setValue={setValue}
              setOpenSearch={setOpenSearch}
              findShoes={findShoes}
            />
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
