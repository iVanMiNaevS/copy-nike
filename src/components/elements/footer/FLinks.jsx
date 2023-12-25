import React, { useEffect } from "react";
import { linksFooter } from "../../../contentArrs/linksFooter";
import { useState } from "react";

function FLinks() {
    const [cols, setCols] = useState(linksFooter);
    const [activeAccItems, setActiveAccItems] = useState({
        col2: false,
        col3: false,
        col4: false,
    });

    function checkAccordion(current) {
        const trueItem = [];
        for (let key in activeAccItems) {
            if (activeAccItems[key] === true) {
                trueItem.push(key);
            }
        }
        console.log(current);
        console.log(trueItem);

        if (trueItem[0] !== current && trueItem[0] !== undefined) {
            console.log("fsdfsdfdf");
            setActiveAccItems({
                ...activeAccItems,
                [trueItem[0]]: false,
                [current]: true,
            });
        }
    }

    function createDefaultCol(col, nameCol) {
        return (
            <ul
                className={
                    activeAccItems[nameCol] === true
                        ? `${nameCol} footer__accordion-item open`
                        : `${nameCol} footer__accordion-item close`
                }
                key={nameCol}
            >
                <div className="title">{col.title}</div>
                <button
                    className="footer__accordion-header"
                    onClick={() => {
                        setActiveAccItems({
                            ...activeAccItems,
                            [nameCol]: !activeAccItems[nameCol],
                        });
                        checkAccordion(nameCol);
                    }}
                >
                    <span className="title">{col.title}</span>
                    <i className="bx bx-plus plus text-2xl"></i>
                    <i className="bx bx-minus minus text-2xl"></i>
                </button>
                <div className="footer__accordion-body">
                    {col.links.map((link, index) => {
                        return (
                            <li className="col__link" key={index}>
                                {link}
                            </li>
                        );
                    })}
                </div>
            </ul>
        );
    }
    function createTitleCol(col, nameCol) {
        return (
            <ul className={`${nameCol}`} key={nameCol}>
                {col.links.map((link, index) => {
                    return (
                        <li className="title" key={index}>
                            {link}
                        </li>
                    );
                })}
            </ul>
        );
    }
    return (
        <div className="columns">
            {cols.map((col) => {
                const nameCol = Object.keys(col)[0];
                if (col[nameCol].title !== "") {
                    return createDefaultCol(col[nameCol], nameCol);
                }
                return createTitleCol(col[nameCol], nameCol);
            })}
        </div>
    );
}

export default FLinks;
