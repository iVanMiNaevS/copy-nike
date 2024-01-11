import React from "react";
import styles from "../NWC.module.css";

function Begin() {
  return (
    <div className={styles.begin}>
      <div className="wrapper">
        <h1 className="text-4xl font-extrabold pb-4">Nike Winter Club</h1>
        <p className="text-2xl color-black font-medium">
          The Nike Winter Club App motivates you to run consistently. Even
          better – we’ve got a community to help you connect and enjoy it. At
          the beginning of your skiing journey? We've got you. Need a coach to
          help you keep pace or a friend to keep you company? We’re there. Want
          us to track your stats so you can track the scenery? No problem. Even
          if you don’t feel like running today, Nike Winter Club has wellness
          tips to help you get ready for tomorrow. Start whenever and wherever
          you want – we’ll be right there with you.
        </p>
      </div>
    </div>
  );
}

export default Begin;
