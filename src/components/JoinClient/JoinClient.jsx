import React from 'react'
import cls from './style.module.scss'
import LightButton from '../Buttons/LightButton'
import bgImg from '../../assets/images/screen.png'
const JoinClient = () => {
    return (
        <div className={cls.join}>
            <div className='container'>
                <div className={cls.wrp}>
                    <div className={cls.textContent}>
                        <h1 className={cls.textContentTitle}>
                            Join 100 Compannies who boost their business withimgContent
                        </h1>
                        <h1 className={cls.product}>
                            Product
                        </h1>
                        <div> <LightButton>Get This</LightButton></div>
                    </div>
                    <div className={cls.imgContent}>
                        <img src={bgImg} alt="img" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default JoinClient
