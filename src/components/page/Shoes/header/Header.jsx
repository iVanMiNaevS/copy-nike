import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./Header.module.css";
import { joinClasses } from "../../../../utils/joinClasses";
import { useDispatch, useSelector } from "react-redux";

import Sort from "./Sort";
import HideFilters from "./HideFilters";
import BodySort from "./BodySort";

function Header({ setHideFilters }) {
  const [open, setOpen] = useState(false);
  const sortBy = useSelector((store) => store.shoes.sortBy);
  const allShoesLength = useSelector((store) => store.shoes.shoes.length);

  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.titlePage}>Shoes ({allShoesLength})</h1>
        <div className={styles.rightPart}>
          <HideFilters
            className={"hideFilters"}
            setHideFilters={setHideFilters}
            text={"Hide filter"}
          />
          <HideFilters
            className={"MobHideFilters"}
            setHideFilters={setHideFilters}
            text={"filters"}
          />
          <Sort setOpen={setOpen} sortBy={sortBy} />
        </div>
        <div
          className={
            open ? joinClasses(styles.dropDown, styles.open) : styles.dropDown
          }
        >
          <BodySort setOpen={setOpen} />
        </div>
      </div>
      <div className={styles.fish}></div>
    </>
  );
}

export default Header;
