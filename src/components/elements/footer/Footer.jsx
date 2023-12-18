import React from "react";
import styles from "./Footer.css";
import FLinks from "./FLinks";
import SocialNetwork from "../../UI/SocialNetwork/SocialNetwork";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="links">
                <FLinks />
                <SocialNetwork stylesOut={""} />
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
