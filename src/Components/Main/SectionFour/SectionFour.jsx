import { useTranslation } from "react-i18next";
import "./SectionFour.css";
import React from 'react'
import four_img1 from "./image/four_img1.svg";
import four_img2 from "./image/four_img2.svg";
import four_img3 from "./image/four_img3.svg";
import { IoStarSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

function SectionFour() {
    const [t, i18n] = useTranslation();
  return (
    <div className="sectionFour">
        <div className="container">
            <div className="sectionFour-wrapper">
                <div className="four-titles">
                    <h2 className="four-title">{t("sectionFour.four-title")}</h2>
                    <p className="four-text">{t("sectionFour.four-text")}</p>
                </div>
                <ul className="four-list">
                    <li className="four-item">
                        <img src={four_img1} alt="rasm" />
                        <div className="four-items">
                        <h3 className="fourList-title">{t("sectionFour.fourList-title1")}</h3>
                        <p className="fourList-texte">{t("sectionFour.fourList-texte1")}</p>
                        <div className="four-icons">
                            <div className="four-icon">
                                <div className="fourList-icons">
                                 <div className="fourList-users">
                                    <div className="four-user"><FaRegUser /></div>
                                    <p className="fourlist-text">8.2k</p>
                                 </div>
                                 <div className="fourList-stars">
                                    <div className="four-star"><IoStarSharp /></div>
                                    <p className="fourlist-text">4.5</p>
                                 </div>
                                </div>
                            </div>
                            <p className="fourlist-text">{t("sectionFour.fourList-text")}</p>
                        </div>
                        </div>
                        
                    </li>
                    <li className="four-item">
                        <img src={four_img2} alt="rasm" />
                        <div className="four-items">
                        <h3 className="fourList-title">{t("sectionFour.fourList-title2")}</h3>
                        <p className="fourList-texte">{t("sectionFour.fourList-texte2")}</p>
                        <div className="four-icons">
                            <div className="four-icon">
                                <div className="fourList-icons">
                                 <div className="fourList-users">
                                    <div className="four-user"><FaRegUser /></div>
                                    <p className="fourlist-text">8.2k</p>
                                 </div>
                                 <div className="fourList-stars">
                                     <div className="four-star"><IoStarSharp /></div>
                                    <p className="fourlist-text">4.5</p>
                                 </div>
                                </div>
                            </div>
                            <p className="fourlist-text">{t("sectionFour.fourList-text")}</p>
                        </div>
                        </div>
                        
                    </li>
                    <li className="four-item">
                        <img src={four_img3} alt="rasm" />
                        <div className="four-items">
                        <h3 className="fourList-title">{t("sectionFour.fourList-title1")}</h3>
                        <p className="fourList-texte">{t("sectionFour.fourList-texte2")}</p>
                        <div className="four-icons">
                            <div className="four-icon">
                                <div className="fourList-icons">
                                 <div className="fourList-users">
                                    <div className="four-user"><FaRegUser /></div>
                                    <p className="fourlist-text">8.2k</p>
                                 </div>
                                 <div className="fourList-stars">
                                     <div className="four-star"><IoStarSharp /></div>
                                    <p className="fourlist-text">4.5</p>
                                 </div>
                                </div>
                            </div>
                            <p className="fourlist-text">{t("sectionFour.fourList-text")}</p>
                        </div>
                        </div>
                        
                    </li>
                  
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SectionFour