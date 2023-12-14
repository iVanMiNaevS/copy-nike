import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import DropList from "../dropList/DropList";
import styles from "./Header.module.css";
import { contentDropListObj } from "../../../contentArrs/contentDropListObj";
import { joinClasses } from "../../../utils/joinClasses";

function Header({ links }) {
    const [dropListIsOpen, setDropListIsOpen] = useState(false);
    const [dropListContent, setDropListContent] = useState("");

    function createNav(linksActivated, linkUsualy) {
        return [
            linksActivated.map((link, index) => {
                return (
                    <li
                        key={index}
                        onMouseEnter={() => {
                            setDropListIsOpen(true);
                            setDropListContent(
                                contentDropListObj[`${link.id}`]
                            );
                        }}
                        className={styles[`link${index}`]}
                    >
                        <Link to={link.link}>{link.text}</Link>
                    </li>
                );
            }),

            <li key={1} onMouseEnter={() => setDropListIsOpen(false)}>
                <Link to={linkUsualy.link} className="whitespace-nowrap">
                    {linkUsualy.text}
                </Link>
            </li>,
        ];
    }
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
                        <nav className={styles.nav}>
                            <ul className={styles.ul}>
                                {createNav(links, {
                                    link: "/",
                                    text: "Holl page",
                                })}
                            </ul>
                        </nav>
                        <div className={styles.rightPart}>
                            <input
                                placeholder="Search"
                                className={styles.search1}
                            />
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
