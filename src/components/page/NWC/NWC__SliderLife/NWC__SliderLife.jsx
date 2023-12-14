import React from "react";
import MySlider from "../../../elements/MySlider/MySlider";
import poster1 from "../../../../img/NWC/slider1/poster1.jpg";
import poster2 from "../../../../img/NWC/slider1/poster2.jpg";
import poster3 from "../../../../img/NWC/slider1/poster3.jpg";
import MyButtontLink from "../../../UI/MyButton-Link/MyButtonLink";

function NWCSliderLife() {
    const itemsForSlider = [
        {
            img: poster1,
            text: (
                <>
                    <p className="text-2xl">
                        Considering the app is free, it’s just as good as some
                        other ones which charge around £10 a month. The app is
                        really simple to use and it’s easy to view your training
                        plan by day or week or the whole 8 weeks. The plan
                        really kept me motivated and in shape during lockdown
                    </p>
                    <MyButtontLink
                        to="#"
                        stylesOut="px-5 mt-12 hover:bg-darkColor"
                    >
                        Get Started
                    </MyButtontLink>
                </>
            ),
            stylesText: "text-black",
        },
        {
            img: poster2,
            text: (
                <>
                    <p className="text-2xl">
                        If you are just starting or are at an intermediate level
                        (even advanced!) there is nothing better. I’ve had this
                        app since February of this year after getting a new
                        phone and I could not have asked for a better gift.
                        There is something so beautiful when there is knowledge
                        and help that is FREE to use. The start-up plan,
                        bodyweight plan and keeping in shape plan.
                    </p>
                    <MyButtontLink
                        to="#"
                        stylesOut="px-5 mt-12 hover:bg-darkColor"
                    >
                        Get Started
                    </MyButtontLink>
                </>
            ),
            stylesText: "text-black",
        },
        {
            img: poster3,
            text: (
                <>
                    <p className="text-2xl">
                        It creates a tailored daily plan based on your
                        height/weight/fitness level/goals and you give feedback
                        on how difficult you found it so that it adapts. Plus,
                        there are additional targeted workouts to choose from.
                        You can tell it what equipment you have and it tailors
                        everything to that. You can also play your music through
                        the app during workouts. And it’s all free – thanks,
                        Nike
                    </p>
                    <MyButtontLink
                        to="#"
                        stylesOut="px-5 mt-12 hover:bg-darkColor"
                    >
                        Learn More
                    </MyButtontLink>
                </>
            ),
            stylesText: "text-black",
        },
    ];
    return (
        <div className="NWC__SliderLife h-fit">
            <div className="wrapper">
                <MySlider items={itemsForSlider} buttons="none" />
            </div>
        </div>
    );
}

export default NWCSliderLife;
