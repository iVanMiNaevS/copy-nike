import React from "react";
import { useState } from "react";
import DropList from "../dropList/DropList";
import styles from "./Header.module.css";
import MobMenu from "./mobMenu/MobMenu";
import Navigation from "./Navigation";

function Header() {
  const [dropListIsOpen, setDropListIsOpen] = useState(false);
  const [dropListContent, setDropListContent] = useState("");

  return (
    <>
      <header>
        <div className="wrapper">
          <div className={styles.headerPart}>
            <div className={styles.icon}>
              <img
                src={require("../../../img/holl-page/jordan-icon.png")}
                alt="men"
                width={"60px"}
              />
            </div>
            <Navigation
              setDLCont={setDropListContent}
              setDLIsOpen={setDropListIsOpen}
            />
            <div className={styles.rightPart}>
              <input placeholder="Search" className={styles.search1} />
              <i className="bx bx-shopping-bag text-3xl"></i>
              <i className="bx bx-user text-3xl"></i>
            </div>
            <div className={styles.mobRightPart}>
              <i className="bx bx-search text-3xl"></i>
              <i className="bx bx-shopping-bag text-3xl"></i>
              <i className="bx bx-user text-3xl"></i>
              <div className={styles.burger}>
                <div className={styles.row}></div>
                <div className={styles.row}></div>
                <div className={styles.row}></div>
              </div>
              <MobMenu />
            </div>
          </div>
        </div>
      </header>

      <DropList
        dropListIsOpen={dropListIsOpen}
        setDropListIsOpen={setDropListIsOpen}
        content={dropListContent}
      />
    </>
  );
}

export default Header;
