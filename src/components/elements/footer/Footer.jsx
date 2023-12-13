import React from "react";
import { useState } from "react";
import styles from "./Footer.css";
import { linksFooter } from "../../../contentArrs/linksFooter";
function Footer() {
    const [cols, setCols] = useState(linksFooter);
    return (
        <footer className={styles.footer}>
            <div className="links">
                <div className="columns">
                    {cols.map((col, index) => {
                        const nameCol = Object.keys(col)[0];
                        if (col[nameCol].title !== "") {
                            return (
                                <ul className={nameCol} key={index}>
                                    <div className="title">
                                        {col[nameCol].title}
                                    </div>
                                    {col[nameCol].links.map((link, index) => {
                                        return (
                                            <li
                                                className="col__link"
                                                key={index}
                                            >
                                                {link}
                                            </li>
                                        );
                                    })}
                                </ul>
                            );
                        }
                        return (
                            <ul className={nameCol} key={index}>
                                {col[nameCol].links.map((link, index) => {
                                    return (
                                        <li className="title" key={index}>
                                            {link}
                                        </li>
                                    );
                                })}
                            </ul>
                        );
                    })}
                </div>
                <div className="socialNetwork">
                    <div className="twiter sn">
                        <i className="bx bxl-twitter text-3xl"></i>
                    </div>
                    <div className="facebook sn">
                        <i className="bx bxl-facebook text-3xl"></i>
                    </div>
                    <div className="youtube sn">
                        <i className="bx bxl-youtube text-3xl"></i>
                    </div>
                    <div className="instagram sn">
                        <i className="bx bxl-instagram text-3xl"></i>
                    </div>
                </div>
            </div>
            <div className="cookie-and-terms">
                <div className="footer__left-part">
                    <div className="location">
                        <i className="bx bxs-location-plus text-lg mr-3"></i>
                        Finland
                    </div>

                    <div className="anything">
                        © 2023 Nike, Inc. All Rights Reserved
                    </div>
                </div>
                <ul className="cookie-and-terms-links">
                    <li className="cookie-and-terms-links__item">Guide</li>
                    <li className="cookie-and-terms-links__item">
                        Term of Use
                    </li>
                    <li className="cookie-and-terms-links__item">
                        Term of Sale
                    </li>
                    <li className="cookie-and-terms-links__item">
                        Company Details
                    </li>
                    <li className="cookie-and-terms-links__item">
                        Privacy & Cookie Policy
                    </li>
                    <li className="cookie-and-terms-links__item">
                        Cookie Settings
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
