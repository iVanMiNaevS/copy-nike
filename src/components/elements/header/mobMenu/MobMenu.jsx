import React from "react";
import MyButtonLink from "../../../UI/MyButton-Link/MyButtonLink";
import { Link } from "react-router-dom";
import MMPanel from "./childComponents/MMPanel/MMPanel";
import { useState } from "react";
import MMServices from "./childComponents/MMServices";
import { contentPanel1, contentPanel2 } from "./MMLinksForPanel";
import MMLinks from "./childComponents/MMLinks";
import styles from "./MobMenu.module.css";
import { useRef } from "react";
import { joinClasses } from "../../../../utils/joinClasses";
import { useLocation } from "react-router-dom";

function MobMenu({ toggleMenu }) {
  const { pathname } = useLocation();

  React.useEffect(() => {
    toggleMenu(false);
  }, [pathname]);

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
  const mainPanel = useRef(null);
  function scrollRight(el) {
    const panel = el.current;
    if (panel.parentNode.nodeName === "NAV") {
      panel.classList.add(`${styles.hideLeft}`);
      panel.nextElementSibling.classList.remove(`${styles.hideRight}`);
    } else {
      panel.parentNode.previousElementSibling.classList.add(
        `${styles.hideLeft}`
      );
      panel.parentNode.classList.add(`${styles.hideLeft}`);
      panel.parentNode.nextElementSibling.classList.remove(
        `${styles.hideRight}`
      );
    }
  }
  function scrollLeft(el) {
    const panel = el.current;
    panel.parentNode.previousElementSibling.classList.remove(
      `${styles.hideLeft}`
    );
    panel.parentNode.classList.add(`${styles.hideRight}`);
  }
  return (
    <nav className={styles.mobMenu}>
      <div className={styles.mainPanel} ref={mainPanel}>
        <div className={styles.close} onClick={() => toggleMenu(false)}>
          <i className="bx bx-x"></i>
        </div>

        <MMLinks
          changeContent={changeContentMMPanel1}
          scrollRightHandler={scrollRight}
          mainPanel={mainPanel}
        />
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
      <div className={joinClasses(styles.secondPanel, styles.hideRight)}>
        <MMPanel
          panelLinks={linksForPanel1}
          changeContent={changeContentMMPanel2}
          scrollHandlers={{ scrollRight, scrollLeft }}
        />
      </div>
      <div className={joinClasses(styles.thirdPanel, styles.hideRight)}>
        <MMPanel
          panelLinks={linksForPanel2}
          lastPanel={true}
          scrollHandlers={{ scrollLeft }}
        />
      </div>
    </nav>
  );
}

export default MobMenu;
