import { useTranslation } from "react-i18next";
import "./Hero.css";
import React from 'react'

function Hero() {
    const [t, i18n] = useTranslation();
  return (
    <div className="hero"></div>
  )
}

export default Hero