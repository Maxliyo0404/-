import { useTranslation } from "react-i18next";
import "./SectionSix.css";
import React from 'react'

function SectionSix() {
    const [t, i18n] = useTranslation();
  return (
    <div className="sectionSix">
        <div className="container">
            <div className="sectionSix-wrapper">
                <div className="six-titles">
                    <h3 className="six-title">85+</h3>
                    <p className="six-text">{t("sectionSix.six-text1")}</p>
                </div>
                <div className="six-titles">
                    <h3 className="six-title">850+</h3>
                    <p className="six-text">{t("sectionSix.six-text2")}</p>
                </div>
                <div className="six-titles">
                    <h3 className="six-title">55+</h3>
                    <p className="six-text">{t("sectionSix.six-text3")}</p>
                </div>
                <div className="six-titles">
                    <h3 className="six-title">25+</h3>
                    <p className="six-text">{t("sectionSix.six-text4")}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionSix