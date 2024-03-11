import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DropList from "../dropList/DropList";
import styles from "./Header.module.css";
import MMWrapper from "./mobMenu/MMWrapper";
import Navigation from "./Navigation";

function Header() {
  const [dropListIsOpen, setDropListIsOpen] = useState(false);
  const [dropListContent, setDropListContent] = useState("");
  const [openMobMenu, setOpenMobMenu] = useState(false);
  const countOrders = useSelector((store) => store.basket.items.length);
  useEffect(() => {
    openMobMenu
      ? document.body.classList.add("no-scroll")
      : document.body.classList.remove("no-scroll");
  }, [openMobMenu]);

  return (
    <>
      <div className="fixed z-50 w-full">
        <header>
          <div className="wrapper">
            <div className={styles.headerPart}>
              <div className={styles.icon}>
                <Link to={"/"}>
                  <img
                    src={require("../../../img/holl-page/jordan-icon.png")}
                    alt="men"
                    width={"60px"}
                  />
                </Link>
              </div>
              <Navigation
                setDLCont={setDropListContent}
                setDLIsOpen={setDropListIsOpen}
              />
              <div className={styles.rightPart}>
                <input placeholder="Search" className={styles.search1} />

                <Link to={"basket"} className="hover:cursor-pointer">
                  <i
                    className={`text-3xl bx bx-shopping-bag hover:text-white transiton ${
                      countOrders > 0 ? styles.bagIcon : ""
                    }`}
                    countorders={countOrders}
                  ></i>
                </Link>
                <i className="text-3xl bx bx-user"></i>
              </div>
              <div className={styles.mobRightPart}>
                <i className="text-3xl bx bx-search"></i>
                <Link to={"basket"} className="hover:cursor-pointer">
                  <i
                    className={`text-3xl bx bx-shopping-bag hover:text-white transiton ${
                      countOrders > 0 ? styles.bagIcon : ""
                    }`}
                    countorders={countOrders}
                  ></i>
                </Link>
                <i className="text-3xl bx bx-user"></i>
                <div
                  className={styles.burger}
                  onClick={() => setOpenMobMenu(true)}
                >
                  <div className={styles.row}></div>
                  <div className={styles.row}></div>
                  <div className={styles.row}></div>
                </div>
                <MMWrapper toggleMenu={setOpenMobMenu} open={openMobMenu} />
              </div>
            </div>
          </div>
        </header>

        <DropList
          dropListIsOpen={dropListIsOpen}
          setDropListIsOpen={setDropListIsOpen}
          content={dropListContent}
        />
      </div>
      <div className="h-[64px]"></div>
    </>
  );
}

export default Header;
