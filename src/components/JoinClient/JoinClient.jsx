import React from 'react'
import cls from './style.module.scss'
import LightButton from '../Buttons/LightButton'
const JoinClient = () => {
    return (
        <div className={cls.join}>
            <div className='container'>
                <div className={cls.wrp}>
                    <div className={cls.textContent}>
                        <h1 className={cls.textContentTitle}>
                            Join 100 Compannies who boost their business with Product
                        </h1>
                        <h1 className={cls.textContentTitle}>
                            Product
                        </h1>
                        <LightButton>Get This</LightButton>
                    </div>
                    <div className={cls.imgContent}></div>
                </div>
            </div>

        </div>
    )
}

export default JoinClient
