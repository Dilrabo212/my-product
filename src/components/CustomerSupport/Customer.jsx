import React from 'react'
import cls from './style.module.scss'
import { Cheked1, Cheked2, Cheked3, } from '../../icons/svj'
import maneg from '../../assets/images/amico.png'
const Customer = () => {
    return (
        <div className={cls.management}>
            <div className='container'>
                <div className={cls.flex}>
                    <div className={cls.rightContent}>
                        <img src={maneg} alt="img" />
                    </div>
                    <div className={cls.leftContent}>
                        <h3 className={cls.subTitle}>Easier decision making for</h3>
                        <h1 className={cls.mainTitle}>
                            Customer Support
                        </h1>
                        <div className={cls.flexi}>
                            <Cheked1 />
                            <p className={cls.mainText}>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun</p>
                        </div>
                        <div className={cls.flexi}>
                            <Cheked2 />
                            <p className={cls.mainText}>If you are looking for a new way to promote your business that won’t cost you more money, </p></div>
                        <div className={cls.flexi}>
                            <Cheked3 />
                            <p className={cls.mainText}>If you are looking for a new way to promote your business that won’t cost you more money, </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Customer
