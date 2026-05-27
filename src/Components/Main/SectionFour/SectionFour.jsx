import { useTranslation } from "react-i18next";
import "./SectionFour.css";
import React from 'react'

function SectionFour() {
    const [t, i18n] = useTranslation();
  return (
    <div className="sectionFour">
        <div className="container">
            <div className="sectionFour-wrapper">
                <div className="four-titles">
                    <h2 className="four-title">{t("")}</h2>
                    <p className="four-text"></p>
                </div>
                <ul className="four-list">
                    <li className="four-item">
                        <img src={} alt="rasm" />
                        <h3 className="fourList-title"></h3>
                        <p className="fourList-text"></p>
                        
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SectionFour