import React from 'react'
import cls from './style.module.scss'
import { ManegmantIcon } from '../../icons/svj'
import maneg from '../../assets/images/amico2.png'
const Management = () => {
    return (
        <div className={cls.management}>
            <div className='container'>
                <div className={cls.flex}>
                    <div className={cls.leftContent}>
                        <h3 className={cls.subTitle}>Effortless Validation for</h3>
                        <h1 className={cls.mainTitle}>
                            Management
                        </h1>
                        <h3 className={cls.subTitle}>Accessory makers</h3>
                        <p className={cls.mainText}>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun</p>
                        <h3 className={cls.subTitle}>Alterationists</h3>
                        <p className={cls.mainText}>If you are looking for a new way to promote your business that won’t cost you more money, </p>

                    </div>
                    <div className={cls.rightContent}>
                        <img src={maneg} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Management
