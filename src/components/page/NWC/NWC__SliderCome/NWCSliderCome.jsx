import React from "react";
import MySlider from "../../../UI/MySlider/MySlider";

import poster1 from "../../../../img/NWC/slider2/poster1.jpg";
import poster2 from "../../../../img/NWC/slider2/poster2.jpg";
import poster3 from "../../../../img/NWC/slider2/poster3.jpg";
import poster4 from "../../../../img/NWC/slider2/poster4.jpg";
import poster5 from "../../../../img/NWC/slider2/poster5.jpg";
import poster6 from "../../../../img/NWC/slider2/poster6.jpg";
import MyButtontLink from "../../../UI/MyButton-Link/MyButtonLink";
function NWCSliderCome() {
  const itemsForSlider = [
    {
      img: poster1,
      text: (
        <>
          <p className="pb-4 pt-2 text-xl ">Snow suit for snowboarding</p>
          <MyButtontLink to="#" stylesOut="px-3 text-xl hover:bg-darkColor">
            300$
          </MyButtontLink>
        </>
      ),
      stylesText: "text-black",
    },
    {
      img: poster2,
      text: (
        <>
          <p className="pb-4 pt-2 text-xl ">Snow suit for snowboarding</p>
          <MyButtontLink to="#" stylesOut="px-3 text-xl hover:bg-darkColor">
            370$
          </MyButtontLink>
        </>
      ),
      stylesText: "text-black",
    },
    {
      img: poster3,
      text: (
        <>
          <p className="pb-4 pt-2 text-xl ">Snow suit for snowboarding</p>
          <MyButtontLink to="#" stylesOut="px-3 text-xl hover:bg-darkColor">
            320$
          </MyButtontLink>
        </>
      ),
      stylesText: "text-black",
    },
    {
      img: poster4,
      text: (
        <>
          <p className="pb-4 pt-2 text-xl ">Snow suit for snowboarding</p>
          <MyButtontLink to="#" stylesOut="px-3 text-xl hover:bg-darkColor">
            450$
          </MyButtontLink>
        </>
      ),
      stylesText: "text-black",
    },
    {
      img: poster5,
      text: (
        <>
          <p className="pb-4 pt-2 text-xl ">Snow suit for snowboarding</p>
          <MyButtontLink to="#" stylesOut="px-3 text-xl hover:bg-darkColor">
            250$
          </MyButtontLink>
        </>
      ),
      stylesText: "text-black",
    },
    {
      img: poster6,
      text: (
        <>
          <p className="pb-4 pt-2 text-xl ">Snow suit for snowboarding</p>
          <MyButtontLink to="#" stylesOut="px-3 text-xl hover:bg-darkColor">
            500$
          </MyButtontLink>
        </>
      ),
      stylesText: "text-black",
    },
  ];
  return (
    <div className="NWC__SliderCome">
      <div className="wrapper">
        <MySlider items={itemsForSlider} />
      </div>
    </div>
  );
}

export default NWCSliderCome;
