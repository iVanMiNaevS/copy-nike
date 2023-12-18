import React from "react";
import styles from "./SocialNetwork.module.css";
import { joinClasses } from "../../../utils/joinClasses";
function SocialNetwork({ stylesOut }) {
    return (
        <div
            className={styles.socialNetwork}
            style={{ width: stylesOut.widthCont }}
        >
            <div
                className={joinClasses(styles.twiter, styles.sn)}
                style={{ width: stylesOut.iconWidth }}
            >
                <i className="bx bxl-twitter text-3xl"></i>
            </div>
            <div
                className={joinClasses(styles.facebook, styles.sn)}
                style={{ width: stylesOut.iconWidth }}
            >
                <i className="bx bxl-facebook text-3xl"></i>
            </div>
            <div
                className={joinClasses(styles.youtube, styles.sn)}
                style={{ width: stylesOut.iconWidth }}
            >
                <i className="bx bxl-youtube text-3xl"></i>
            </div>
            <div
                className={joinClasses(styles.instagram, styles.sn)}
                style={{ width: stylesOut.iconWidth }}
            >
                <i className="bx bxl-instagram text-3xl"></i>
            </div>
        </div>
    );
}

export default SocialNetwork;
