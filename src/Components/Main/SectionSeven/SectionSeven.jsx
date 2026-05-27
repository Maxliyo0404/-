import { useTranslation } from "react-i18next";
import "./SectionSeven.css";
import React from 'react'
import seven_img1 from "./image/seven_img1.svg";
import seven_img2 from "./image/seven_img2.svg";
import seven_img3 from "./image/seven_img3.svg";

function SectionSeven() {
    const [t, i18n] = useTranslation();
  return (
    <div className="sectionSeven">
        <div className="container">
            <div className="sectionSeven-wrapper">
                <div className="seven-titles">
                     <h2 className="seven-title">{t("sectionSeven.seven-title")}</h2>
                    <p className="seven-text">{t("sectionSeven.seven-text")}</p>
                </div>
                <ul className="seven-list">
                    <li className="seven-item">
                        <img className="seven-img" src={seven_img1} alt="rasm" />
                        <div className="seven-items">
                         <h2 className="sevenList-title">{t("sectionSeven.sevenList-title")}</h2>
                         <p className="sevenList-text">{t("sectionSeven.sevenList-text")}</p>
                         <a className="seven-link" href="#">{t("sectionSeven.seven-link")}</a>
                         </div>
                    </li>
                    <li className="seven-item">
                        <img className="seven-img" src={seven_img2} alt="rasm" />
                         <div className="seven-items">
                         <h2 className="sevenList-title">{t("sectionSeven.sevenList-title")}</h2>
                         <p className="sevenList-text">{t("sectionSeven.sevenList-text")}</p>
                         <a className="seven-link" href="#">{t("sectionSeven.seven-link")}</a>
                         </div>
                    </li>
                    <li className="seven-item">
                        <img className="seven-img" src={seven_img3} alt="rasm" />
                        <div className="seven-items">
                         <h2 className="sevenList-title">{t("sectionSeven.sevenList-title")}</h2>
                         <p className="sevenList-text">{t("sectionSeven.sevenList-text")}</p>
                         <a className="seven-link" href="#">{t("sectionSeven.seven-link")}</a>
                         </div>
                    </li>
                </ul>
                <button className="seven-btn">{t("sectionSeven.seven-btn")}</button>
            </div>
        </div>
    </div>
  )
}

export default SectionSeven