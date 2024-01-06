import React from "react";
import MyButtonLink from "../../../UI/MyButton-Link/MyButtonLink";
import { Link } from "react-router-dom";
import MMPanel from "./MMPanel/MMPanel";
import { useState } from "react";
import MMServices from "./MMServices";
import { contentPanel1, contentPanel2 } from "./MMLinksForPanel";
import MMLinks from "./MMLinks";
import styles from "./MobMenu.module.css";

function MobMenu({ toggleMenu }) {
  const [linksForPanel1, setLinksForPanel1] = useState({
    prevPanel: "All",
    title: "products",
    links: ["Title1", "Title2", "Title3"],
  });
  const [linksForPanel2, setLinksForPanel2] = useState({
    prevPanel: "Title1",
    title: "products",
    links: ["products", "products", "products"],
  });
  function changeContentMMPanel1(link) {
    setLinksForPanel1(contentPanel1[link]);
  }
  function changeContentMMPanel2(link, prevPanel) {
    setLinksForPanel2({ ...contentPanel2[link], prevPanel: prevPanel });
  }
  return (
    <nav className={styles.mobMenu}>
      <div className={styles.mainPanel}>
        <div className={styles.close} onClick={() => toggleMenu(false)}>
          <i className="bx bx-x"></i>
        </div>

        <MMLinks changeContent={changeContentMMPanel1} />
        <div className={styles.jordan}>
          <img
            src={require("../../../../img/holl-page/jordan-icon.png")}
            alt="men"
            width={"30px"}
          />
          <span>Jordan</span>
        </div>
        <div className={styles.join_us}>
          <div className={styles.text}>
            Become a Nike Member for the best products, inspiration and stories
            in sport. <Link to={"#"}>Learn more</Link>
          </div>
          <MyButtonLink stylesOut="rounded-xl mr-5 mb-5 text-lg font-medium">
            Join Us
          </MyButtonLink>
          <MyButtonLink stylesOut="rounded-xl mr-5 bg-transparent border border-ctGreen text-black text-lg font-medium">
            Sign In
          </MyButtonLink>
        </div>
        <MMServices />
      </div>
      <div className={styles.secondPanel}>
        <MMPanel
          panelLinks={linksForPanel1}
          changeContent={changeContentMMPanel2}
        />
      </div>
      <div className={styles.thirdPanel}>
        <MMPanel panelLinks={linksForPanel2} lastPanel={true} />
      </div>
    </nav>
  );
}

export default MobMenu;
