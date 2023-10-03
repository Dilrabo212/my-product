import React from 'react'
import cls from './style.module.scss'
import StrategisCard from '../StrategiesCard/StrategisCard'
import card1 from '../../assets/images/image.png'
import card2 from '../../assets/images/image (1).png'
import card3 from '../../assets/images/image (2).png'
import card4 from '../../assets/images/Image Placeholder (2).png'
import card5 from '../../assets/images/Image Placeholder (3).png'
import { Next } from '../../icons/svj'
const Section2 = () => {
    return (
        <div className='container'>
            <div className={cls.Wrapper}>
                <h1 className={cls.titleSextion2}>Latest Stories</h1>
                <p className={cls.subTitle}> We focus on ergonomics and meeting you where you work. It's only a keystroke away. </p>
                <div className={cls.wrapCard}>

                    <StrategisCard
                        img={card3}
                        name="Wahid Ari"
                        date="03 March 2019"
                        description="Increasing Prosperity With Positive"
                    />

                    <StrategisCard
                        img={card4}
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
                        img={card1}
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
                    <StrategisCard
                        img={card5}
                        name="Wahid Ari"
                        date="03 March 2019"
                        description="Increasing Prosperity With Positive"
                    />
                </div>
                <span className={cls.next}>More Stories <Next /></span>
            </div>

        </div>
    )
}

export default Section2
