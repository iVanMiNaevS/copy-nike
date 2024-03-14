import React from "react";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import MyButton from "../../UI/MyButton/MyButton";
import ShoesItem from "../../page/Shoes/shoesPart/ShoesItem";
import { useSelector } from "react-redux";
function Search({ value, setValue }) {
  const popularTerms = ["Jordan", "Air Force"];
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
            <div className={styles.content}>
              <div className={styles.terms}>
                <div className={styles.title}>Popular Search Terms</div>
                {popularTerms.map((el) => {
                  return (
                    <div key={el} className={styles.popularTerms}>
                      <div
                        onClick={(e) => {
                          setValue(e.target.innerHTML);
                          findShoes(e.target.innerHTML);
                        }}
                      >
                        {el}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className={styles.results}>
                <div className={styles.resultContainer}>
                  {shoes.map(
                    (el, index) =>
                      index < 6 && (
                        <div
                          key={el.id}
                          onClick={() => {
                            setOpenSearch(false);
                            setValue("");
                          }}
                        >
                          <ShoesItem shoes={el} />
                        </div>
                      )
                  )}
                </div>
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
