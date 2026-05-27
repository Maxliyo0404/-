import { useTranslation } from "react-i18next";
import "./SectionThree.css";
import React from 'react'
import { CiUser } from "react-icons/ci";
import { TfiEye } from "react-icons/tfi";
import { TfiEye } from "react-icons/tfi"
import { CiStar } from "react-icons/ci";
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
                <li className="three-item">
                    <img className="three-img" src={} alt="rasm" />
                    <div className="list-icons">
                        <div className="icon-list"><CiUser /></div>
                        <h3 className="list-title">5.8 k</h3>
                        <div className="sectionThree"><TfiEye />Jgit add </div>
                        <h3 className="list-title">69k</h3>
                         <div className="icon-list"><CiStar /></div>
                          <h3 className="list-title">4.3k</h3>
                          <img className="list-img" src={} alt="rasm" />
                        
                    </div>
                    <h4 className="threeList-title">{t("sectionThree.threeList-title2")}<span className="threeList-span">$150</span></h4>
                    <p className="threeList-text">{t("sectionThree.threeList-text")}</p>
                </li>
                <li className="three-item">
                    <img className="three-img" src={} alt="rasm" />
                    <div className="list-icons">
                        <div className="icon-list"><CiUser /></div>
                        <h3 className="list-title">5.8 k</h3>
                        <div className="sectionThree"><TfiEye />Jgit add </div>
                        <h3 className="list-title">69k</h3>
                         <div className="icon-list"><CiStar /></div>
                          <h3 className="list-title">4.3k</h3>
                          <img className="list-img" src={} alt="rasm" />
                        
                    </div>
                    <h4 className="threeList-title">{t("sectionThree.threeList-title2")}<span className="threeList-span">$130</span></h4>
                    <p className="threeList-text">{t("sectionThree.threeList-text")}</p>
                </li>
                <li className="three-item">
                    <img className="three-img" src={} alt="rasm" />
                    <div className="list-icons">
                        <div className="icon-list"><CiUser /></div>
                        <h3 className="list-title">5.8 k</h3>
                        <div className="sectionThree"><TfiEye />Jgit add </div>
                        <h3 className="list-title">69k</h3>
                         <div className="icon-list"><CiStar /></div>
                          <h3 className="list-title">4.3k</h3>
                          <img className="list-img" src={} alt="rasm" />
                        
                    </div>
                    <h4 className="threeList-title">{t("sectionThree.threeList-title3")}<span className="threeList-span">$140</span></h4>
                    <p className="threeList-text">{t("sectionThree.threeList-text")}</p>
                </li>
                <li className="three-item">
                    <img className="three-img" src={} alt="rasm" />
                    <div className="list-icons">
                        <div className="icon-list"><CiUser /></div>
                        <h3 className="list-title">5.8 k</h3>
                        <div className="sectionThree"><TfiEye />Jgit add </div>
                        <h3 className="list-title">69k</h3>
                         <div className="icon-list"><CiStar /></div>
                          <h3 className="list-title">4.3k</h3>
                          <img className="list-img" src={} alt="rasm" />
                        
                    </div>
                    <h4 className="threeList-title">{t("sectionThree.threeList-title2")}<span className="threeList-span">$120</span></h4>
                    <p className="threeList-text">{t("sectionThree.threeList-text")}</p>
                </li>
                <li className="three-item">
                    <img className="three-img" src={} alt="rasm" />
                    <div className="list-icons">
                        <div className="icon-list"><CiUser /></div>
                        <h3 className="list-title">5.8 k</h3>
                        <div className="sectionThree"><TfiEye />Jgit add </div>
                        <h3 className="list-title">69k</h3>
                         <div className="icon-list"><CiStar /></div>
                          <h3 className="list-title">4.3k</h3>
                          <img className="list-img" src={} alt="rasm" />
                        
                    </div>
                    <h4 className="threeList-title">{t("sectionThree.threeList-title3")}<span className="threeList-span">$120</span></h4>
                    <p className="threeList-text">{t("sectionThree.threeList-text")}</p>
                </li>
                <li className="three-item">
                    <img className="three-img" src={} alt="rasm" />
                    <div className="list-icons">
                        <div className="icon-list"><CiUser /></div>
                        <h3 className="list-title">5.8 k</h3>
                        <div className="sectionThree"><TfiEye />Jgit add </div>
                        <h3 className="list-title">69k</h3>
                         <div className="icon-list"><CiStar /></div>
                          <h3 className="list-title">4.3k</h3>
                          <img className="list-img" src={} alt="rasm" />
                        
                    </div>
                    <h4 className="threeList-title">{t("sectionThree.threeList-title4")}<span className="threeList-span">$100</span></h4>
                    <p className="threeList-text">{t("sectionThree.threeList-text")}</p>
                </li>
                
            </ul>
            </div>
        </div>
    </div>
  )
}

export default SectionThree