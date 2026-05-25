import { useTranslation } from "react-i18next";
import "./SectionThree.css";
import React from 'react'

function SectionThree() {
    const [t, i18n] = useTranslation();
  return (
    <div className="sectionThree">
        <div className="container">
            <div className="sectionThree-wrapper">
            <div className="three-titles">
                <h2 className="three-title"></h2>
                <p className="three-text"></p>
            </div>
            <ul className="three-list">
                <li></li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default SectionThree