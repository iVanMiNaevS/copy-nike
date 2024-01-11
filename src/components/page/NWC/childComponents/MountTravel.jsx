import React from "react";
import styles from "../NWC.module.css";
import MyButtonLink from "../../../UI/MyButton-Link/MyButtonLink";
function MountTravel() {
  return (
    <div className={styles.mountTravel__text}>
      <div className={styles.container}>
        <h2 className={styles.h2Layer}>Mount Travel</h2>
        <p className={styles.pLayer}>
          This exclusive feature combines calming conversation and guidance from
          Headspace Gurus and NRC Coaches to help you practice your running and
          mindfulness and become a better runner. Make running a full body and
          mind experience with Headspace Guided Runs today.
        </p>
        <MyButtonLink to={"#"} stylesOut="px-5 text-xl hover:bg-darkColor">
          Learn More
        </MyButtonLink>
      </div>
    </div>
  );
}

export default MountTravel;
