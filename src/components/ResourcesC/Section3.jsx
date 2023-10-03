import React from 'react'
import cls from './style.module.scss'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter } from '../../icons/svj'
import map from '../../assets/images/map.png'
const Section3 = () => {
    return (
        <div className='container'>
            <div className={cls.contactWrapper}>
                <h1 className={cls.contactTitle}>Contact Us</h1>
                <p className={cls.contactText}>Need more detailed information?
                    Get in touch with us.</p>
                <div className={cls.contactSotsialIcon}>
                    <button className={cls.socialIcons}><Link to="/"><Instagram /></Link></button>
                    <button className={cls.socialIcons}><Link to="/"><Facebook /></Link></button>
                    <button className={cls.socialIcons}><Link to="/"><Twitter /></Link></button>
                </div>
                <img src={map} alt="" />
            </div>
        </div>
    )
}

export default Section3
