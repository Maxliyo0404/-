import "./Header.css";
import React, { useState } from 'react'
import i18next from "i18next";
import { useTranslation } from "react-i18next";

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
                 <a className="logo" href="#">{t("header.logo")}</a>
             <nav className={`header-nav ${isMenuOpen ? "active" : ""}`}>
                  <ul className="header-list">
                    <li><a className="header-link" href="#">{t("header.home")} <LuChevronDown /></a></li>
                    <li><a className="header-link" href="#">{t("header.courses")} <LuChevronDown /></a></li>
                    <li><a className="header-link" href="#">{t("header.page")} <LuChevronDown /></a></li>
                    <li><a className="header-link" href="#">{t("header.blog")} <LuChevronDown /></a></li>
                    <li><a className="header-link" href="#">{t("header.contact")} </a></li>
                    <li><a className="header-link" href="#">{t("header.singin")}</a></li>
                  </ul>
                 <button className="header-btn">{t("header.header-btn")}</button>
                  <div className="header-actions">
                    <select className="select" onChange={handleChangeLanguage} value={i18n.language}>
                      <option value="uz">Uz</option>
                      <option value="en">Eng</option>
                      <option value="ru"> Rus</option>
                    </select>
                  </div>
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