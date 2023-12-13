import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import DropList from "../dropList/DropList";
import styles from "./Header.module.css";
import { contentDropListObj } from "../../../contentArrs/contentDropListObj";

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
                    >
                        <Link to={link.link}>{link.text}</Link>
                    </li>
                );
            }),

            <li key={1} onMouseEnter={() => setDropListIsOpen(false)}>
                <Link to={linkUsualy.link}>{linkUsualy.text}</Link>
            </li>,
        ];
    }
    return (
        <>
            <header>
                <div className="wrapper">
                    <div className={styles.headerPart}>
                        <div className="w-64 h-16">
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
                            <i className="bx bx-search text-2xl"></i>
                            <input
                                placeholder="Search"
                                className={styles.search1}
                            />
                            <i className="bx bx-shopping-bag text-3xl"></i>
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
