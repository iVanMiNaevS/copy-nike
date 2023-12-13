import React from "react";
import MySlider from "../../../elements/MySlider/MySlider";
import poster1 from "../../../../img/holl-page/sliderHollPage1/poster1.jpg";
import poster2 from "../../../../img/holl-page/sliderHollPage1/poster2.jpg";
import poster3 from "../../../../img/holl-page/sliderHollPage1/poster3.jpg";
import poster4 from "../../../../img/holl-page/sliderHollPage1/poster4.jpg";
import poster5 from "../../../../img/holl-page/sliderHollPage1/poster5.jpg";
import "./SliderSection.css";
function SliderSection() {
    const itemsForSlider = [
        {
            img: poster1,
            text: "Srtong",
            stylesText: "text-white",
        },
        {
            img: poster2,
            text: "Speedy",
            stylesText: "text-white",
        },
        {
            img: poster3,
            text: "Jump",
            stylesText: "text-white",
        },
        {
            img: poster4,
            text: "Run",
            stylesText: "text-white",
        },
        {
            img: poster5,
            text: "Swim",
            stylesText: "text-white",
        },
    ];

    return (
        <div className="sliderSect bg-darkColor">
            <div className="wrapper">
                <MySlider items={itemsForSlider} />
            </div>
        </div>
    );
}

export default SliderSection;
