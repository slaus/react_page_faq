import React, {useEffect} from 'react';
import {useTranslation, Trans} from 'react-i18next';
import i18next from 'i18next';
import cookies from 'js-cookie';
import classNames from 'classnames';

import 'bootstrap/dist/js/bootstrap.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './HelpPage.scss';
import Button from "../../UI/Button/Button";
import Icon from "../../UI/Icon/Icon";
import Accordion from "../../UI/Accordion/Accordion";

const languages = [
    {
        code: 'de',
        name: 'Deutsche',
        country_code: 'de',
    },
    {
        code: 'en',
        name: 'English',
        country_code: 'gb',
    },
    {
        code: 'fr',
        name: 'Français',
        country_code: 'fr',
    },
    {
        code: 'es',
        name: 'Español',
        country_code: 'es',
    },
    {
        code: 'ar',
        name: 'العربية',
        dir: 'rtl',
        country_code: 'sa',
    },
    {
        code: 'ru',
        name: 'Русский',
        country_code: 'ru',
    },
];

const HelpPage = () => {

    const currentLanguageCode = cookies.get('i18next') || 'en';
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
    const {t} = useTranslation();

    useEffect(() => {
        document.body.dir = currentLanguage.dir || 'ltr';
        document.title = t('__app_title') + " — " + t('__app_slogan') + "!";
    }, [currentLanguage, t]);

    return (
        <div className="container help">
            <div className="help__wrapper">
                <div className="help__content content">
                    <div className="help__content--title">
                        <Trans>__app_handbook</Trans>
                    </div>
                    <div className="help__content--text">
                        {/*<div className="help__content--text_item">
                            <div className="question"><Trans>__app_handbook_question_1</Trans></div>
                            <div className="answer"><Trans>__app_handbook_answer_1</Trans></div>
                        </div>
                        <div className="help__content--text_item">
                            <div className="question"><Trans>__app_handbook_question_2</Trans></div>
                            <div className="answer"><Trans>__app_handbook_answer_2</Trans></div>
                        </div>
                        <div className="help__content--text_item">
                            <div className="question"><Trans>__app_handbook_question_3</Trans></div>
                            <div className="answer"><Trans>__app_handbook_answer_3</Trans></div>
                        </div>
                        <div className="help__content--text_item">
                            <div className="question"><Trans>__app_handbook_question_4</Trans></div>
                            <div className="answer"><Trans>__app_handbook_answer_4</Trans></div>
                        </div>
                        <div className="help__content--text_item">
                            <div className="question"><Trans>__app_handbook_question_5</Trans></div>
                            <div className="answer"><Trans>__app_handbook_answer_5</Trans></div>
                        </div>*/}
                        <Accordion
                            title={<Trans>__app_handbook_question_1</Trans>}
                            content={i18next.t('__app_handbook_answer_1')}
                        />
                        <Accordion
                            title={<Trans>__app_handbook_question_2</Trans>}
                            content={i18next.t('__app_handbook_answer_2')}
                        />
                        <Accordion
                            title={<Trans>__app_handbook_question_3</Trans>}
                            content={i18next.t('__app_handbook_answer_3')}
                        />
                        <Accordion
                            title={<Trans>__app_handbook_question_4</Trans>}
                            content={i18next.t('__app_handbook_answer_4')}
                        />
                        <Accordion
                            title={<Trans>__app_handbook_question_5</Trans>}
                            content={i18next.t('__app_handbook_answer_5')}
                        />
                    </div>
                </div>
            </div>
            <div className="help__content--block-back">
                <Button to="/" transparent>
                    <Icon name="arrow_left" blue />
                </Button>
            </div>
        </div>
    );
};

export default HelpPage;