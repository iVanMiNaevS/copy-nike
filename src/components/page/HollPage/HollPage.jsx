import React from "react";
import LastSection from "./LastSection/LastSection";
import FirstSection from "./FirstSection/FirstSection";
import SliderSection from "./SliderSection/SliderSection";
import "./HollPage.css";
function HollPage() {
    return (
        <div className="HollPage">
            <FirstSection />
            <SliderSection />
            <LastSection />
        </div>
    );
}

export default HollPage;
