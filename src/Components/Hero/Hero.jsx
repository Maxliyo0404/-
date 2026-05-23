import { useTranslation } from "react-i18next";
import "./Hero.css";
import React from 'react'
import hero_list1 from "./image/hero_list1.svg";
import hero_list2 from "./image/hero_list2.svg";
import hero_list3 from "./image/hero_list3.svg";

function Hero() {
    const [t, i18n] = useTranslation();
  return (
    <div className="hero">
        <div className="container">
            <div className="hero-wrapper">
                <div className="hero-info">
                    <h1 className="">{t("hero.hero-title")}</h1>
                    <p className="">{t("hero.hero-text")}</p>
                    <button className="hero-btn">{t("hero.hero-btn")}</button>
                </div>
               <ul className="hero-list">
                <li className="hero-item">
                    <img src={hero_list1} alt="rasm" />
                        <div className="list-titles">
                            <h3 className="list-title">1400 +</h3>
                            <p className="list-text">{t("hero.online Courses")}</p>
                        </div>
                 
                </li>
                <li className="hero-item">
                  <img src={hero_list2} alt="rasm" />
                        <div className="list-titles">
                            <h3 className="list-title">1100 +</h3>
                            <p className="list-text">{t("hero.expert Instructors")}</p>
                        </div>
                
                </li>
                <li className="hero-item">
                    <img src={hero_list3} alt="rasm" />
                        <div className="list-titles">
                            <h3 className="list-title">800 +</h3>
                            <p className="list-text">{t("hero.Success Stories")}</p>
                        </div>
            
                </li>
               </ul>
            </div>
        </div>
    </div>
  )
}

export default Hero