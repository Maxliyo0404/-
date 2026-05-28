import { useTranslation } from "react-i18next";
import "./Footer.css";
import React from 'react'
import { FaChevronRight } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { IoGlobeOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
    const [t, i18n] = useTranslation();
  return (
    <div className="footer">
        <div className="container">
            <div className="footer-wrapper">
                <div className="footer-col">
                    <h3 className="footer-logo">{t("footer.footer-logo")}</h3>
                     <p className="footer-text">{t("footer.footer-text")}</p>
                     <div className="footer-icons">
                        <span className="footer-span">{t("footer.footer-spans")}</span>
                        <div className="footer-piktos">
                            <div className="footer-pikto"><FaFacebookF /></div>
                            <div className="footer-pikto"><FaTwitter /></div>
                            <div className="footer-pikto"><BiLogoInstagramAlt /></div>
                            <div className="footer-pikto"><FaLinkedinIn /></div>
                        </div>
                     </div>
                </div>
                <div className="footer-col">
                   <h4 className="footer-title">{t("footer.footer-title1")}</h4> 
                <ul className="footer-list">
                    <li><a className="footer-link" href="#"><FaChevronRight />{t("footer.footer-link1")}</a></li>
                    <li><a className="footer-link" href="#"><FaChevronRight />{t("footer.footer-link2")}</a></li>
                    <li><a className="footer-link" href="#"><FaChevronRight />{t("footer.footer-link3")}</a></li>
                    <li><a className="footer-link" href="#"><FaChevronRight />{t("footer.footer-link4")}</a></li>
                    <li><a className="footer-link" href="#"><FaChevronRight />{t("footer.footer-link5")}</a></li>
                    <li><a className="footer-link" href="#"><FaChevronRight />{t("footer.footer-link6")}</a></li>
                </ul>
                </div>
                <div className="footer-col">
                   <h4 className="footer-title">{t("footer.footer-title2")}</h4> 
                <ul className="footer-list">
                    <li><a className="footer-link" href="#"><FaChevronRight />{t("footer.footer-link7")}</a></li>
                    <li><a className="footer-link" href="#"><FaChevronRight />{t("footer.footer-link8")}</a></li>
                    <li><a className="footer-link" href="#"><FaChevronRight />{t("footer.footer-link9")}</a></li>
                    <li><a className="footer-link" href="#"><FaChevronRight />{t("footer.footer-link10")}</a></li>
                    <li><a className="footer-link" href="#"><FaChevronRight />{t("footer.footer-link11")}</a></li>
                </ul>
                </div>
                <div className="footer-col">
                    <h4 className="footer-title">{t("footer.footer-title3")}</h4> 
                    <ul className="footer-contact">
                        <li><i class="icon-location"></i> 230, Mirpur Area, Mirpur 10, Dhaka, Bangladesh</li>
                        <li><i class="icon-phone"></i> <FaPhone /> +017 4845 7269</li>
                        <li><i class="icon-email"></i><MdOutlineMail /> info@gmail.com</li>
                        <li><i class="icon-web"></i><IoGlobeOutline /> www.yourdomain.com</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer