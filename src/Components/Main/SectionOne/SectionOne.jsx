import { useTranslation } from "react-i18next";
import "./SectionOne.css";
import React from 'react'

function SectionOne() {
    const [t, i18n] = useTranslation();
  return (
    <div className="sectionOne">
        <div className="container">
            <div className="sectionOne-wrapper">
                <h2 className="one-title"></h2>
                <ul></ul>
            </div>
        </div>
    </div>
  )
}

export default SectionOne