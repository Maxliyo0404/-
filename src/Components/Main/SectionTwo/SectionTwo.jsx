import { useTranslation } from "react-i18next";
import "./SectionTwo.css";
import React from 'react'
import two_list1 from "./image/two_list1.svg";
import two_list2 from "./image/two_list2.svg";
import two_list3 from "./image/two_list3.svg";
import two_list4 from "./image/two_list4.svg";

function SectionTwo() {
    const [t, i18n] = useTranslation();
  return (
    <div className="sectionTwo">
        <div className="container">
            <div className="sectionTwo-wrapper">
                <div className="two-info">
                <h2 className="two-title">{t("sectionTwo.two-title")}</h2>
                <p className="two-text">{t("sectionTwo.two-text")}</p>
                </div>
                <ul className="two-list">
                    <li className="two-item">
                        <img className="two-list" src={two_list1} alt="rasm" />
                        <h3 className="twoList-title">{t("sectionTwo.twoList-title1")}</h3>
                        <p className="twoList-text">{t("sectionTwo.twoList-text")}</p>
                    </li>
                    <li className="two-item">
                        <img className="two-list" src={two_list2} alt="rasm" />
                        <h3 className="twoList-title">{t("sectionTwo.twoList-title2")}</h3>
                        <p className="twoList-text">{t("sectionTwo.twoList-text")}</p>
                    </li>
                    <li className="two-item">
                        <img className="two-list" src={two_list3} alt="rasm" />
                        <h3 className="twoList-title">{t("sectionTwo.twoList-title3")}</h3>
                        <p className="twoList-text">{t("sectionTwo.twoList-text")}</p>
                    </li>
                    <li className="two-item">
                        <img className="two-list" src={two_list4} alt="rasm" />
                        <h3 className="twoList-title">{t("sectionTwo.twoList-title3")}</h3>
                        <p className="twoList-text">{t("sectionTwo.twoList-text")}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SectionTwo