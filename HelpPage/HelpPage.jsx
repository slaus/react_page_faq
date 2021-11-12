import React, {useEffect} from 'react';
import classNames from 'classnames';

import 'bootstrap/dist/js/bootstrap.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './HelpPage.scss';
import Button from "../../UI/Button/Button";
import Icon from "../../UI/Icon/Icon";
import Accordion from "../../UI/Accordion/Accordion";

const HelpPage = () => {

    return (
        <div className="container help">
            <div className="help__wrapper">
                <div className="help__content content">
                    <div className="help__content--title">
                        FAQ Page
                    </div>
                    <div className="help__content--text">
                        <Accordion
                            title="Question No 1"
                            content="Answer No 1"
                        />
                        <Accordion
                            title="Question No 2"
                            content="Answer No 2"
                        />
                        <Accordion
                            title="Question No 3"
                            content="Answer No 3"
                        />
                        <Accordion
                            title="Question No 4"
                            content="Answer No 4"
                        />
                        <Accordion
                            title="Question No 5"
                            content="Answer No 5"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpPage;
