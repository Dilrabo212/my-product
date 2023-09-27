import React from 'react'
import cls from './style.module.scss'
import { GreenButton } from '../../components/Buttons'
import { CardIcon1, CardIcon2, CardIcon3, CardIcon4, Icon1 } from '../../icons/svj'
const ProductBuild = () => {
    return (
        <div className={cls.productBuild}>
            <div className='container'>
                <div className={cls.wrp}>
                    <div className={cls.BuildTitle}>
                        <h2 className={cls.productBuildTitle}>Product  was Built Specifically
                            for You</h2>
                    </div>
                    <div className={cls.cards}>
                        <div className={cls.card}>
                            <CardIcon1 className={cls.cardBtn} />
                            <h4 className={cls.cardTitle}>First click tests</h4>
                            <p className={cls.cardText}>While most people enjoy casino gambling,</p>
                        </div>
                        <div className={cls.card}>
                            <CardIcon2 className={cls.cardBtn} />
                            <h4 className={cls.cardTitle}>Design surveys</h4>
                            <p className={cls.cardText}>Sports betting, lottery and bingo playing for the fun</p>
                        </div>
                        <div className={cls.card}>
                            <CardIcon3 className={cls.cardBtn} />
                            <h4 className={cls.cardTitle}>Preference tests</h4>
                            <p className={cls.cardText}>The Myspace page defines the individual.</p>
                        </div>
                        <div className={cls.card}>
                            <CardIcon4 className={cls.cardBtn} />
                            <h4 className={cls.cardTitle}>Five second tests</h4>
                            <p className={cls.cardText}>Personal choices and the overall personality of the person. </p>
                        </div>
                    </div>
                    <div className={cls.btn}><GreenButton>SIGN UP NOW</GreenButton></div>
                </div>
            </div>
        </div>
    )
}

export default ProductBuild
