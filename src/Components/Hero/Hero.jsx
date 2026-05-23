import { useTranslation } from "react-i18next";
import "./Hero.css";
import React from 'react'

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
                    <div className="hero-icon">
                        <div className="list-titles">
                            <h3 className="list-title">1400 +</h3>
                            <p className="list-text">{t,("hero.")}</p>
                        </div>
                    </div>
                </li>
                <li className="hero-item">
                    <div className="hero-icon">
                        <div className="list-titles">
                            <h3 className="list-title">1400 +</h3>
                            <p className="list-text">{t,("hero.")}</p>
                        </div>
                    </div>
                </li>
                <li className="hero-item">
                    <div className="hero-icon">
                        <div className="list-titles">
                            <h3 className="list-title">1400 +</h3>
                            <p className="list-text">{t,("hero.")}</p>
                        </div>
                    </div>
                </li>
               </ul>
            </div>
        </div>
    </div>
  )
}

export default Hero