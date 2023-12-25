import React from "react";
import { contentDropListObj } from "../../../contentArrs/contentDropListObj";
import links from "./linksForHeader";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Navigation({ setDLCont, setDLIsOpen }) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        {links.map((link, index) => {
          return (
            <li
              key={index}
              onMouseEnter={() => {
                setDLIsOpen(true);
                setDLCont(contentDropListObj[`${link.id}`]);
              }}
              className={styles[`link${index}`]}
            >
              <Link to={link.link}>{link.text}</Link>
            </li>
          );
        })}
        <li onMouseEnter={() => setDLIsOpen(false)}>
          <Link to={"/"} className="whitespace-nowrap">
            Holl page
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
