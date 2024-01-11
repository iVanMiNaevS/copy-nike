import React from "react";
import styles from "../NWC.module.css";

function WhyNWC() {
  return (
    <div className={styles.whyNWC}>
      <div className={styles.container}>
        <h2 className={styles.h2Layer}>Why Nike Winter Club?</h2>
        <p className={styles.pLayer}>
          Whether you've never laced up before, you're running your first 5k or
          you're training for a marathon, the Nike Run Club App has the tools to
          help. We'll guide you to get started and keep going.
        </p>
      </div>
    </div>
  );
}

export default WhyNWC;
