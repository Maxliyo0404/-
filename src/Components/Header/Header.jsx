import "./Header.css";
import React, { useState } from 'react'
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { FaPhone } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai";
function Header() {
    const [t, i18n] = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleChangeLanguage = (event) =>{
        i18n.changeLanguage(event.target.value)
    }
  return (
    <div className="header">
        <div className="container">
            <div className="header-wrapper">
                <div className="header-navbar">
                   <a className="logo" href="#">{t("header.logo")} <span className="logo-span">{t("header.logo-span")} </span></a>
                   <div className="header-phone">
                   <a className="logo-phone" href="#"><FaPhone /> 0 (800) 508-622</a>
                   <div className="facebooks">
                    <div className="facebook"><FaFacebookF /></div>
                    <div className="facebook"><AiFillInstagram /></div>
                   </div>
                   <div className="header-actions">
                    <select className="select" onChange={handleChangeLanguage} value={i18n.language}>
                      <option value="uz">Uz</option>
                      <option value="en">Eng</option>
                      <option value="ru"> Rus</option>
                    </select>
                  </div>

                </div>
                </div>
                
             <nav className={`header-nav ${isMenuOpen ? "active" : ""}`}>
                  <ul className="header-list">
                    <li><a className="header-link" href="#">{t("header.Курсы обучения")} </a></li>
                    <li><a className="header-link" href="#">{t("header.Вебинары")}</a></li>
                    <li><a className="header-link" href="#">{t("header.Видео-уроки")} </a></li>
                    <li><a className="header-link" href="#">{t("header.Блог")} </a></li>
                    <li><a className="header-link" href="#">{t("header.О нас")} </a></li>
                    <li><a className="header-link" href="#">{t("header.Прайс")}</a></li>
                    <li><a className="header-link" href="#">{t("header.Рассписание")}</a></li>
                    <li><a className="header-link" href="#">{t("header.Акции")}</a></li>
                    <li><a className="header-link" href="#">{t("header.Магазин")}</a></li>
                  </ul>
                
           </nav>
      <div className={`burger-menu ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
            </div>
        </div>
    </div>
  )
}

export default Header