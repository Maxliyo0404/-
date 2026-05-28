import { useTranslation } from "react-i18next";
import "./SectionNine.css";
import React from 'react'

function SectionNine() {
    const [t, i18n] = useTranslation();
  return (
    <div className="sectionNine">
        <div className="container">
            <div className="sectionNine-wrapper">
                <div className="nine-titles">
                     <h2 className="nine-title">{t("sectionNine.nine-title")}</h2>
                     <p className="nine-text">{t("sectionNine.nine-text")}</p>
                </div>
                <form className="form">
                    <input type="text" required placeholder={} />
                    <button className="nine-btn"></button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SectionNine