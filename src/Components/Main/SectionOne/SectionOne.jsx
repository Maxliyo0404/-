import "./SectionOne.css";
import React from 'react'
import one_rasms from "./image/one_rasms.svg"
import { useTranslation } from "react-i18next";

function SectionOne() {
    const [t, i18n] = useTranslation();
  return (
    <div className="SectionOne">
        <div className="container">
            <div className="sectionOne-wrapper">
                <div className="sectionOne-left">
                    <h2 className="one-title">{t("sectionOne.one-title")}</h2>
                    <p className="one-texts">{t("sectionOne.one-texts")}</p>
                    <p className="one-text">{t("sectionOne.one-text")}</p>
                    <button className="one-btn">{t("sectionOne.one-btn")}</button>
                </div>
                <div className="sectionOne-right">
                    <img className="one-rasm" src={one_rasms} alt="rasm" />
                    <span className="one-spans"></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionOne