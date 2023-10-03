import React from 'react'
import cls from './style.module.scss'
import icon1 from '../../assets/images/placeholder1.png'
import icon2 from '../../assets/images/placeholder2.png'
const Section4 = () => {
    return (
        <div className='container'>
            <div className={cls.titleWrapper}>
                <h1 className={cls.title}>Join thousand of other who have
                    already received offers</h1>
            </div>
            <div className={cls.content}>
                <div className={cls.card1}>

                    <div className={cls.img}>
                        <img src={icon1} alt="" />
                    </div>
                    <div className={cls.subtitle}>Business</div>
                    <span className={cls.text}>                        <span > Cash Flow</span>
                        <span >Asset Backed</span>
                        <span >Receivables Finance</span>
                    </span>


                    <span className={cls.textButton}>Find the best business product</span>


                </div>
                <div className={cls.card1}>

                    <div className={cls.img}>
                        <img src={icon2} alt="" />
                    </div>
                    <div className={cls.subtitle}>Enterprise</div>
                    <span className={cls.text}>
                        <span>Site Acquisition</span>
                        <span>Bridge</span>
                        <span> Development Financing</span>
                    </span>




                    <span className={cls.textButton}>Find the best business product</span>


                </div>
            </div>
        </div>

    )
}

export default Section4
