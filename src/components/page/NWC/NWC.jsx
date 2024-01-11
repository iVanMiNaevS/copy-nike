import React from "react";
import styles from "./NWC.module.css";
import NWCSliderCome from "./childComponents/NWC__SliderCome/NWCSliderCome";
import NWCSliderLife from "./childComponents/NWC__SliderLife/NWC__SliderLife";
import Begin from "./childComponents/Begin";
import WhyNWC from "./childComponents/WhyNWC";
import MountTravel from "./childComponents/MountTravel";
import WantMove from "./childComponents/WantMove";
import NWCApp from "./childComponents/NWCApp";
import End from "./childComponents/End";

function NWC() {
  return (
    <div className={styles.nwc}>
      <div className={styles.headerPart}>
        <div className={styles.headerPartIcon}>NWC</div>
      </div>
      <Begin />
      <img
        src={require("../../../img/NWC/skiMan2.jpg")}
        alt="skiMan"
        className={styles.whyNWCImg}
      />
      <WhyNWC />

      <div className={styles.mountTravelBg}>
        <div className={styles.mountTravelBgIcon}>Mount Travel</div>
      </div>
      <MountTravel />

      <NWCSliderLife />

      <WantMove />

      <img
        src={require("../../../img/NWC/snowboardman.jpeg")}
        alt="snowman"
        className={styles.snowBoardMan}
      />
      <NWCApp />
      <NWCSliderCome />
      <End />
    </div>
  );
}

export default NWC;
