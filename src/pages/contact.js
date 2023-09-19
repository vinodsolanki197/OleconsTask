import React from "react";
import Menu from "../component/menu";
import Languageoption from "../component/langDropdown";
import { useTranslation } from "react-i18next";
import i18next from "i18next";


const Contact = () => {
    const {t} = useTranslation();
    const handleClick=(e)=>{
        i18next.changeLanguage(e.target.value)
    }
    return(
        <div>
            <Menu />
            <Languageoption onChange={(e)=>handleClick(e)}/>
        <h1>{t('welcome')} {t('contact')}  {t('page')}</h1>
        </div>
    );
}

export default Contact;