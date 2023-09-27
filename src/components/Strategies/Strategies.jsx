import React from 'react'
import cls from './style.module.scss'
import card1 from '../../assets/images/image.png'
import card2 from '../../assets/images/image (1).png'
import card3 from '../../assets/images/image (2).png'
import { Dots } from '../../icons/svj'
const Strategies = () => {
    return (
        <div className='container'>
            <div className={cls.strWrap}>
                <div className={cls.strategies}>
                    <h1 className={cls.strTitle}>
                        Contents Strategies
                    </h1>
                    <p className={cls.strText}>We focus on ergonomics and meeting you where you work. It's only a keystroke away. </p>
                </div>
                <div className={cls.Cards}>
                    <div className={cls.strCard}>
                        <img src={card1} alt="" />
                        <span className={cls.info}>
                            By
                            <b className={cls.bold}>Wahid Ari</b>
                            |  03 March 2019
                        </span>
                        <span className={cls.nameStr}>Increasing Prosperity With Positive Thinking</span>
                    </div>
                    <div className={cls.strCard}>
                        <img src={card2} alt="" />
                        <span className={cls.info}>
                            By
                            <b className={cls.bold}>Wahid Ari</b>
                            |  03 March 2019
                        </span>
                        <span className={cls.nameStrChecked}>Increasing Prosperity With Positive Thinking</span>
                    </div>
                    <div className={cls.strCard}>
                        <img src={card3} alt="" />
                        <span className={cls.info}>
                            By
                            <b className={cls.bold}>Wahid Ari</b>
                            |  03 March 2019
                        </span>
                        <span className={cls.nameStr}>Increasing Prosperity With Positive Thinking</span>
                    </div>
                </div>
                <div className={cls.dots}>
                    <Dots />
                </div>
            </div>

        </div>
    )
}

export default Strategies