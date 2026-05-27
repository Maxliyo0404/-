import { useTranslation } from "react-i18next";
import "./SectionThree.css";
import React from 'react'
import { CiUser } from "react-icons/ci";
import { TfiEye } from "react-icons/tfi";
import { CiStar } from "react-icons/ci";
import three_img1 from "./image/three_img1.svg";
import three_img11 from "./image/three_img11.svg";
import three_img2 from "./image/three_img2.svg";
import three_img22 from "./image/three_img22.svg";
import three_img3 from "./image/three_img3.svg";
import three_img33 from "./image/three_img33.svg";
import three_img4 from "./image/three_img4.svg";
import three_img44 from "./image/three_img44.svg";
import three_img5 from "./image/three_img5.svg";
import three_img55 from "./image/three_img55.svg";
import three_img6 from "./image/three_img6.svg";
import three_img66 from "./image/three_img66.svg";
function SectionThree() {
    const [t, i18n] = useTranslation();
  return (
    <div className="sectionThree">
        <div className="container">
            <div className="sectionThree-wrapper">
            <div className="three-titles">
                <h2 className="three-title">{t("sectionThree.three-title")}</h2>
                <p className="three-text">{t("sectionThree.three-text")}</p>
            </div>
            <ul className="three-list">
                <li className="three-item">
                    <img className="three-img" src={three_img1} alt="rasm" />
                    <div className="list-icons">
                        <div className="icon-list"><CiUser /></div>
                        <h4 className="threeList-title">5.8k</h4>
                        <div className="icon-list"><TfiEye /></div>
                        <h4 className="threeList-title">69k</h4>
                         <div className="icon-list"><CiStar /></div>
                          <h4 className="threeList-title">4.3k</h4>
                          <img className="list-img" src={three_img11} alt="rasm" />
                    </div>
                    <div className="threeList-texts">
                    <h3 className="threeList-titles">{t("sectionThree.threeList-title2")}<span className="threeList-span">$150</span></h3>
                    <p className="threeList-text">{t("sectionThree.threeList-text")}</p>
                    </div>
                </li>
                <li className="three-item">
                    <img className="three-img" src={three_img2} alt="rasm" />
                    <div className="list-icons">
                        <div className="icon-list"><CiUser /></div>
                        <h4 className="threeList-title">5.8k</h4>
                        <div className="icon-list"><TfiEye /></div>
                        <h4 className="threeList-title">69k</h4>
                         <div className="icon-list"><CiStar /></div>
                          <h4 className="threeList-title">4.3k</h4>
                          <img className="list-img" src={three_img22} alt="rasm" />
                    </div>
                     <div className="threeList-texts">
                    <h3 className="threeList-titles">{t("sectionThree.threeList-title2")}<span className="threeList-span">$130</span></h3>
                    <p className="threeList-text">{t("sectionThree.threeList-text")}</p>
                    </div>
                </li>
                <li className="three-item">
                    <img className="three-img" src={three_img3} alt="rasm" />
                    <div className="list-icons">
                        <div className="icon-list"><CiUser /></div>
                        <h4 className="threeList-title">5.8k</h4>
                        <div className="icon-list"><TfiEye /></div>
                        <h4 className="threeList-title">69k</h4>
                         <div className="icon-list"><CiStar /></div>
                          <h4 className="threeList-title">4.3k</h4>
                          <img className="list-img" src={three_img33} alt="rasm" />
                    </div>
                       <div className="threeList-texts">
                    <h3 className="threeList-titles">{t("sectionThree.threeList-title3")}<span className="threeList-span">$140</span></h3>
                    <p className="threeList-text">{t("sectionThree.threeList-text")}</p>
                    </div>
                </li>
                <li className="three-item">
                    <img className="three-img" src={three_img4} alt="rasm" />
                    <div className="list-icons">
                        <div className="icon-list"><CiUser /></div>
                        <h4 className="threeList-title">5.8k</h4>
                        <div className="icon-list"><TfiEye /></div>
                        <h4 className="threeList-title">69k</h4>
                         <div className="icon-list"><CiStar /></div>
                          <h4 className="threeList-title">4.3k</h4>
                          <img className="list-img" src={three_img44} alt="rasm" />
                    </div>
                      <div className="threeList-texts">
                    <h3 className="threeList-titles">{t("sectionThree.threeList-title2")}<span className="threeList-span">$120</span></h3>
                    <p className="threeList-text">{t("sectionThree.threeList-text")}</p>
                    </div>
                </li>
                <li className="three-item">
                    <img className="three-img" src={three_img5} alt="rasm" />
                    <div className="list-icons">
                        <div className="icon-list"><CiUser /></div>
                        <h4 className="threeList-title">5.8k</h4>
                        <div className="icon-list"><TfiEye /></div>
                        <h4 className="threeList-title">69k</h4>
                         <div className="icon-list"><CiStar /></div>
                          <h4 className="threeList-title">4.3k</h4>
                          <img className="list-img" src={three_img55} alt="rasm" />
                    </div>
                      <div className="threeList-texts">
                    <h3 className="threeList-titles">{t("sectionThree.threeList-title3")}<span className="threeList-span">$120</span></h3>
                    <p className="threeList-text">{t("sectionThree.threeList-text")}</p>
                    </div>
                </li>
                <li className="three-item">
                    <img className="three-img" src={three_img6} alt="rasm" />
                    <div className="list-icons">
                        <div className="icon-list"><CiUser /></div>
                        <h4 className="threeList-title">5.8k</h4>
                        <div className="icon-list"><TfiEye /></div>
                        <h4 className="threeList-title">69k</h4>
                         <div className="icon-list"><CiStar /></div>
                          <h4 className="threeList-title">4.3k</h4>
                          <img className="list-img" src={three_img66} alt="rasm" />
                    </div>
                      <div className="threeList-texts">
                    <h3 className="threeList-titles">{t("sectionThree.threeList-title4")}<span className="threeList-span">$100</span></h3>
                    <p className="threeList-text">{t("sectionThree.threeList-text")}</p>
                    </div>
                </li>
                
            </ul>
            </div>
        </div>
    </div>
  )
}

export default SectionThree