import React from 'react'
import cls from './style.module.scss'
import card1 from '../../assets/images/image.png'
import card2 from '../../assets/images/image (1).png'
import card3 from '../../assets/images/image (2).png'
import { Dots } from '../../icons/svj'
import StrategisCard from '../StrategiesCard/StrategisCard'
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

                    <StrategisCard
                        img={card1}
                        name="Wahid Ari"
                        date="03 March 2019"
                        description="Increasing Prosperity With Positive"
                    />
                    <StrategisCard
                        img={card2}
                        name="Wahid Ari"
                        date="03 March 2019"
                        description="Increasing Prosperity With Positive"
                    />
                    <StrategisCard
                        img={card3}
                        name="Wahid Ari"
                        date="03 March 2019"
                        description="Increasing Prosperity With Positive"
                    />
                </div>
                <div className={cls.dots}>
                    <Dots />
                </div>
            </div>

        </div>
    )
}

export default Strategies
