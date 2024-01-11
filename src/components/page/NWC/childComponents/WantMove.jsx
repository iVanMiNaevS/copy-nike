import React from "react";
import styles from "../NWC.module.css";

function WantMove() {
  return (
    <div className={styles.wantMove}>
      <div className={styles.container}>
        <h2 className={styles.h2Layer}>
          We’ve Got You — However and Wherever You Want To Move
        </h2>
        <p className={styles.pLayer}>
          No matter what type of athlete you are, we're here to support you. If
          you're a beginner, take things slow and set your own goals and
          challenges. Turn GPS off and use Nike Run Club as a treadmill running
          app if training indoors is your thing. Or maybe you're not a runner?
          That's OK too. Use Nike Run Club for walking to track your routes and
          check your progress in the same way.
        </p>
      </div>
    </div>
  );
}

export default WantMove;
