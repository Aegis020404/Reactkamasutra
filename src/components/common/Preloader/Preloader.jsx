import React from 'react';
import preloader from "../../../assets/images/spinner.svg";
import s from './Preloader.module.css'
const Preloader = () => {
    return (
        <div className={s.wrap}>
            <img className={s.preloader} src={preloader} alt="preloader"/>
        </div>
    );
};

export default Preloader;