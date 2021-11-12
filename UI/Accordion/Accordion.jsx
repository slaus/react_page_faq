import React, { useState, useRef } from "react";

import "./Accordion.scss";
import Icon from "../Icon/Icon";

function Accordion(props) {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion__icon");

    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "accordionActive" : "");
        setHeightState(
            setActive === "accordionActive" ? "0px" : `${content.current.scrollHeight}px`
        );
        setRotateState(
            setActive === "accordionActive" ? "accordion__icon" : "accordion__icon rotate"
        );
    }

    return (
        <div className="accordion-section">
            <div className={`accordion ${setActive}`} onClick={toggleAccordion}>
                <div className="accordion__title">{props.title}</div>
                {<Icon name="plus" size={22} className={`${setRotate}`}/>}
            </div>
            <div
                ref={content}
                style={{ maxHeight: `${setHeight}` }}
                className="accordion__content"
            >
                <div
                    className="accordion__text"
                    dangerouslySetInnerHTML={{ __html: props.content }}
                />
            </div>
        </div>
    );
}

export default Accordion;
