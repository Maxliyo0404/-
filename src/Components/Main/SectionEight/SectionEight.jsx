import { useTranslation } from "react-i18next";
import "./SectionEight.css";
import React from 'react'
import eight_img1 from "./image/eight_img1.svg";
import eight_img2 from "./image/eight_img2.svg";
import eight_img3 from "./image/eight_img3.svg";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

function SectionEight() {
    const [t, i18n] = useTranslation();
  return (
    <div className="sectionEight">
        <div className="container">
            <div className="sectionEight-wrapper">
                <div className="eight-titles">
                     <h2 className="eight-title">{t("sectionEight.eight-title")}</h2>
                    <p className="eight-text">{t("sectionEight.eight-text")}</p>
                </div>
                <div className="eight-cards">
                      <div className="eight-isons"><FaChevronLeft /></div>
                <ul className="eight-list">
                  
                    <li className="eight-item">
                        <p className="eightList-texte">{t("sectionEight.eightList-texte")}</p>
                        <div className="eight-items">
                            <img className="eight-rasm" src={eight_img1} alt="rasm" />
                            <div className="eightList-titles">
                                <h2 className="eightList-title">{t("sectionEight.eightList-title1")}</h2>
                                <p className="eightList-text">{t("sectionEight.eightList-text")}</p>
                            </div>
                        </div>
                    </li>
                    <li className="eight-item">
                        <p className="eightList-texte">{t("sectionEight.eightList-texte")}</p>
                        <div className="eight-items">
                            <img className="eight-rasm" src={eight_img2} alt="rasm" />
                            <div className="eightList-titles">
                                <h2 className="eightList-title">{t("sectionEight.eightList-title2")}</h2>
                                <p className="eightList-text">{t("sectionEight.eightList-text")}</p>
                            </div>
                        </div>
                    </li>
                    <li className="eight-item">
                        <p className="eightList-texte">{t("sectionEight.eightList-texte")}</p>
                        <div className="eight-items">
                            <img className="eight-rasm" src={eight_img3} alt="rasm" />
                            <div className="eightList-titles">
                                <h2 className="eightList-title">{t("sectionEight.eightList-title3")}</h2>
                                <p className="eightList-text">{t("sectionEight.eightList-text")}</p>
                            </div>
                        </div>
                    </li>
        
                </ul>
                <div className="eight-isonse"><FaChevronRight /></div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default SectionEight