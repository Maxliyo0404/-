import { useTranslation } from "react-i18next";
import "./SectionTwo.css";
import React from 'react'

function SectionTwo() {
    const [t, i18n] = useTranslation();
  return (
    <div className="sectionTwo">
        <div className="container">
            <div className="sectionTwo-wrapper">
                <h2 className="two-title"></h2>
                <p className="two-text"></p>
            </div>
        </div>
    </div>
  )
}

export default SectionTwo