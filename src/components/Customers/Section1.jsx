import React from 'react'
import cls from './style.module.scss'
import logo1 from '../../assets/images/Airbnb Logo.png'
import logo2 from '../../assets/images/Google Logo.png'
import logo3 from '../../assets/images/Microsoft Logo.png'
import logo4 from '../../assets/images/FedEx Logo.png'

const Section1 = () => {
    return (
        <div className='container'>
            <div className={cls.section1}>
                <h1 className={cls.partnyors}>Our Clients</h1>
                <div className={cls.clientLogos}>
                    <div className={cls.logoBox}><img src={logo1} alt="" /></div>
                    <div className={cls.logoBox}><img src={logo2} alt="" /></div>
                    <div className={cls.logoBox}><img src={logo3} alt="" /></div>
                    <div className={cls.logoBox}><img src={logo4} alt="" /></div>
                </div>
            </div>
        </div>
    )
}

export default Section1
