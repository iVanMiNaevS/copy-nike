import React from "react";
import styles from "../NWC.module.css";
import { joinClasses } from "../../../../utils/joinClasses";
function End() {
  return (
    <div className={styles.end}>
      <div className={styles.container}>
        <h2 className={styles.h2Layer}>Get the Whole Story</h2>{" "}
        <p className={styles.pLayer}>
          The Nike App goes deep on the daily. Stay in the know with
          ready-to-use advice and feature stories on everything from Nike pros
          to neighbourhood teams.
        </p>
      </div>
      <img src={require("../../../../img/NWC/code.webp")} alt="code" />
      <div className={styles.container}>
        <p className={joinClasses(styles.pLayer, styles.center)}>
          Scan the code to download the app.
        </p>
      </div>
    </div>
  );
}

export default End;
