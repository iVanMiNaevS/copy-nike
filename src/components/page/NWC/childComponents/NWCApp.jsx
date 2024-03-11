import React from "react";
import styles from "../NWC.module.css";
import MyButtonLink from "../../../UI/MyButton-Link/MyButtonLink";
function NWCApp() {
  const paragraphs = [
    "Integrate Other Apps",
    "Want to share runs and workouts between your Nike Run Club and Nike Training Club apps?" +
      "Good news — it's easy to connect them. Just follow these steps:",
    "- Open your profile in either app.",
    "- Click 'Settings'",
    "- Tap 'Partners'",
    "- Select 'Nike Run Club' or 'Nike Training Club', depending on which" +
      "app you want to connect.",
  ];
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <h2 className={styles.h2Layer}>Power Up Your NTC App Workouts</h2>
        {paragraphs.map((text) => {
          return (
            <p key={text} className={styles.pLayer}>
              {text}
            </p>
          );
        })}
        <MyButtonLink
          to={"#"}
          stylesOut={"px-4 mt-4 hover:bg-darkColor text-xl"}
        >
          Get started
        </MyButtonLink>
      </div>
    </div>
  );
}

export default NWCApp;
