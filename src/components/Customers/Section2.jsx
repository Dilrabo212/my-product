import React from 'react'
import { CardIcon1, CardIcon2, CardIcon3, CardIcon4 } from '../../icons/svj'
import cls from './style.module.scss'
const Section2 = () => {
    return (
        <div className={cls.section2}>
            <div className={cls.wrp}>
                <div className={cls.BuildTitle}>
                    <h2 className={cls.productBuildTitle}>Why Choose Product?</h2>
                </div>
                <div className={cls.cards}>
                    <div className={cls.card}>
                        <CardIcon1 className={cls.cardBtn} />
                        <h4 className={cls.cardTitle}>Special Business</h4>
                        <p className={cls.cardText}>Product helps you see how many
                            more days you need to work
                            to reach your financial goal
                            for the month and year.</p>
                    </div>
                    <div className={cls.card}>
                        <CardIcon2 className={cls.cardBtn} />
                        <h4 className={cls.cardTitle}>Instant Result</h4>
                        <p className={cls.cardText}>Product helps you see how many
                            more days you need to work
                            to reach your financial goal
                            for the month and year.</p>
                    </div>
                    <div className={cls.card}>
                        <CardIcon3 className={cls.cardBtn} />
                        <h4 className={cls.cardTitle}>Fastest way to organize</h4>
                        <p className={cls.cardText}>Product helps you see how many
                            more days you need to work
                            to reach your financial goal
                            for the month and year.</p>
                    </div>

                </div>

            </div>
        </div>

    )
}

export default Section2
