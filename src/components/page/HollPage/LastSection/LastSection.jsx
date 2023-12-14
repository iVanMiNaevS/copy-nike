import React from "react";
import { Link } from "react-router-dom";
import MyButtonLink from "../../../UI/MyButton-Link/MyButtonLink";
import "./LastSection.css";
function LastSection() {
    return (
        <div className="LastSection bg-darkColor pt-52">
            <div className="wrapper">
                <h1 className="last-section__title text-5xl text-white mb-5">
                    Discover Our Apps
                </h1>
                <div className="last-section__block">
                    <div className="last-section__nike-app">
                        <img
                            src={require("../../../../img/holl-page/nike-logo2.jpg")}
                            alt="logo"
                            className="last-section__logo"
                        />
                        <p className="last-section__text">The Best Of Nike</p>

                        <MyButtonLink
                            to={"/NikeAPP"}
                            stylesOut="px-5 hover:bg-darkColor"
                        >
                            Nike App
                        </MyButtonLink>
                    </div>
                    <div className="last-section__NRC">
                        <img
                            src={require("../../../../img/holl-page/nike-logo2.jpg")}
                            alt="logo"
                            className="last-section__logo"
                        />
                        <p className="last-section__text">Come Run With Us</p>
                        <MyButtonLink
                            to={"/NWC"}
                            stylesOut="px-6 hover:bg-darkColor"
                        >
                            NWC
                        </MyButtonLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LastSection;
