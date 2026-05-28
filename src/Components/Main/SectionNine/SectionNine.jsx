import { useTranslation } from "react-i18next";
import "./SectionNine.css";
import React from 'react'
import axios from "axios";

function SectionNine() {
    const [t, i18n] = useTranslation();
    const sendMessage = (event)=>{
    event.preventDefault();
     const token = `8799654997:AAFXbpKmshRxD_WcqAShMxtcHeU-IMsZ2OE`
    const chat_id =  647264939
     const url = `https://api.telegram.org/bot${token}/sendMessage`;  
     const name = document.getElementById("username").value
    const messageContent = `Nmae: ${name}`;
    axios({
        url:url,
        method:"POST",
        data :{
             chat_id:chat_id,
             text:messageContent,
        }
    })

    
}
  return (
    <div className="sectionNine">
        <div className="container">
            <div className="sectionNine-wrapper">
                <div className="nine-titles">
                     <h2 className="nine-title">{t("sectionNine.nine-title")}</h2>
                     <p className="nine-text">{t("sectionNine.nine-text")}</p>
                </div>
                <form className="form">
                    <input id="username" className="input" type="text" required placeholder={} />
                    <button type="submit" className="nine-btn"></button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SectionNine