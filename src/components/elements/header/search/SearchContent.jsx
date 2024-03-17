import React from "react";
import ShoesItem from "../../../page/Shoes/shoesPart/ShoesItem";
import styles from "../Header.module.css";

function SearchContent({ shoes, setValue, setOpenSearch, findShoes }) {
  const popularTerms = ["Jordan", "Air Force"];
  return (
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
  );
}

export default SearchContent;
