import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "./FirstSection.css";
import MyButtontLink from "../../../UI/MyButton-Link/MyButtonLink";
import { joinClasses } from "../../../../utils/joinClasses";

function FirstSection() {
    const [showShoes, setShowShoes] = useState(false);
    const nodeRef = useRef(null);
    useEffect(() => {
        setShowShoes(true);
    }, []);
    return (
        <section className="firstSect">
            <div className={joinClasses("wrapper", "firstSect__wrapper")}>
                <div className="firstSect__content pt-40">
                    <div className="firstSect__info">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iure, aut minus tenetur assumenda ex placeat cupiditate
                        perferendis officia eius sapiente architecto iusto
                        nostrum dicta omnis accusamus. Aspernatur perspiciatis
                        quaerat corrupti?
                    </div>

                    <MyButtontLink to="/shoes" stylesOut="firstSect__button">
                        WATCH SHOES
                    </MyButtontLink>
                </div>
                <div className="firstSect__imgPart">
                    <CSSTransition
                        nodeRef={nodeRef}
                        in={showShoes}
                        timeout={1500}
                        classNames="shoesAnim"
                    >
                        <img
                            ref={nodeRef}
                            src={require("../../../../img/holl-page/nike-shoes.png")}
                            alt="shoes"
                            className="firstSect__shoes"
                        />
                    </CSSTransition>
                    <img
                        src={require("../../../../img/holl-page/nike-logo.png")}
                        alt="nike-logo"
                        className="firstSect__nikeLogo"
                    />
                </div>
            </div>
        </section>
    );
}

export default FirstSection;
