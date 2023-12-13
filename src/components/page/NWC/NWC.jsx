import React from "react";
import styles from "./NWC.module.css";
import NWCSliderCome from "./NWC__SliderCome/NWCSliderCome";
import NWCSliderLife from "./NWC__SliderLife/NWC__SliderLife";
import MyButtonLink from "../../UI/MyButton-Link/MyButtonLink";
import MyButtontLink from "../../UI/MyButton-Link/MyButtonLink";
import { joinClasses } from "../../../utils/joinClasses";
function NWC() {
    return (
        <div className={styles.nwc}>
            <div className={styles.headerPart}>
                <div className={styles.headerPartIcon}>NWC</div>
            </div>
            <div className={styles.begin}>
                <div className="wrapper">
                    <h1 className="text-4xl font-extrabold pb-4">
                        Nike Winter Club
                    </h1>
                    <p className="text-2xl color-black font-medium">
                        The Nike Winter Club App motivates you to run
                        consistently. Even better – we’ve got a community to
                        help you connect and enjoy it. At the beginning of your
                        skiing journey? We've got you. Need a coach to help you
                        keep pace or a friend to keep you company? We’re there.
                        Want us to track your stats so you can track the
                        scenery? No problem. Even if you don’t feel like running
                        today, Nike Winter Club has wellness tips to help you
                        get ready for tomorrow. Start whenever and wherever you
                        want – we’ll be right there with you.
                    </p>
                </div>
            </div>
            <img
                src={require("../../../img/NWC/skiMan2.jpg")}
                alt="skiMan"
                className={styles.whyNWCImg}
            />
            <div className={styles.whyNWC}>
                <div className={styles.container}>
                    <h2 className={styles.h2Layer}>Why Nike Winter Club?</h2>
                    <p className={styles.pLayer}>
                        Whether you've never laced up before, you're running
                        your first 5k or you're training for a marathon, the
                        Nike Run Club App has the tools to help. We'll guide you
                        to get started and keep going.
                    </p>
                </div>
            </div>

            <div className={styles.mountTravelBg}>
                <div className={styles.mountTravelBgIcon}>Mount Travel</div>
            </div>
            <div className={styles.mountTravel__text}>
                <div className={styles.container}>
                    <h2 className={styles.h2Layer}>Mount Travel</h2>
                    <p className={styles.pLayer}>
                        This exclusive feature combines calming conversation and
                        guidance from Headspace Gurus and NRC Coaches to help
                        you practice your running and mindfulness and become a
                        better runner. Make running a full body and mind
                        experience with Headspace Guided Runs today.
                    </p>
                    <MyButtonLink
                        to={"#"}
                        stylesOut="px-5 text-xl hover:bg-darkColor"
                    >
                        Learn More
                    </MyButtonLink>
                </div>
            </div>

            <NWCSliderLife />

            <div className={styles.wantMove}>
                <div className={styles.container}>
                    <h2 className={styles.h2Layer}>
                        We’ve Got You — However and Wherever You Want To Move
                    </h2>
                    <p className={styles.pLayer}>
                        No matter what type of athlete you are, we're here to
                        support you. If you're a beginner, take things slow and
                        set your own goals and challenges. Turn GPS off and use
                        Nike Run Club as a treadmill running app if training
                        indoors is your thing. Or maybe you're not a runner?
                        That's OK too. Use Nike Run Club for walking to track
                        your routes and check your progress in the same way.
                    </p>
                </div>
            </div>

            <img
                src={require("../../../img/NWC/snowboardman.jpeg")}
                alt="snowman"
                className={styles.snowBoardMan}
            />
            <div className={styles.app}>
                <div className={styles.container}>
                    <h2 className={styles.h2Layer}>
                        Power Up Your NTC App Workouts
                    </h2>
                    <p className={styles.pLayer}>Integrate Other Apps</p>
                    <p className={styles.pLayer}>
                        Want to share runs and workouts between your Nike Run
                        Club and Nike Training Club apps? Good news — it's easy
                        to connect them. Just follow these steps:
                    </p>
                    <p className={styles.pLayer}>
                        - Open your profile in either app.
                    </p>
                    <p className={styles.pLayer}>- Click 'Settings'</p>
                    <p className={styles.pLayer}>- Tap 'Partners'</p>
                    <p className={styles.pLayer}>
                        - Select 'Nike Run Club' or 'Nike Training Club',
                        depending on which app you want to connect.
                    </p>
                    <MyButtontLink
                        to={"#"}
                        stylesOut={"px-4 mt-4 hover:bg-darkColor text-xl"}
                    >
                        Get started
                    </MyButtontLink>
                </div>
            </div>
            <NWCSliderCome />
            <div className={styles.end}>
                <div className={styles.container}>
                    <h2 className={styles.h2Layer}>Get the Whole Story</h2>{" "}
                    <p className={styles.pLayer}>
                        The Nike App goes deep on the daily. Stay in the know
                        with ready-to-use advice and feature stories on
                        everything from Nike pros to neighbourhood teams.
                    </p>
                </div>
                <img src={require("../../../img/NWC/code.webp")} alt="code" />
                <div className={styles.container}>
                    <p className={joinClasses(styles.pLayer, styles.center)}>
                        Scan the code to download the app.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default NWC;
