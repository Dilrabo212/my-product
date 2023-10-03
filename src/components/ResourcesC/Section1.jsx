import React from 'react'
import cls from './style.module.scss'
import ava from '../../assets/images/userAvarars.png'
import scrin from '../../assets/images/Group.png'
const Section1 = () => {
    return (
        <div className='container'>
            <div className={cls.sectio1Wrp}>
                <div className={cls.textContent}>
                    <h1 className={cls.titleRes}>Great Business made with Product.</h1>
                    <p className={cls.subTitleRes}>Build better customer relationships easily messaging that provides a more personal experience for you and your customers.</p>
                    <form action="">
                        <label className={cls.label}>
                            <input className={cls.input} type="text" placeholder="Enter your email adress" />
                            <button className={cls.innerbtn}>Join Now</button>
                        </label>
                    </form>
                    <div className={cls.flex}>
                        <img src={ava} alt="" />
                        <span className={cls.subscribe}>Join over
                            <span className={cls.countGreen}> 4,000+</span>
                            other</span>
                    </div>
                </div>
                <div className={cls.imageContent}>
                    <img src={scrin} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Section1
