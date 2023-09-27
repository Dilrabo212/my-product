import React from 'react'
import cls from './style.module.scss'
import user1 from '../../assets/images/Avator (3).png'
import user2 from '../../assets/images/Avator (2).png'
import user3 from '../../assets/images/Avator.png'
import user4 from '../../assets/images/Avator (1).png'
import GreenButton from '../Buttons/GreenButton'
const Prosses = () => {
    return (
        <div className={cls.prosses}>
            <div className='container'>
                <div className={cls.proTitleBox}>
                    <h1 className={cls.proTitle}>Quick & Easy Process</h1>
                    <p className={cls.proText}>Do you require some help for your project: Conception workshop,
                        prototyping, marketing strategy, landing page, Ux/UI?</p>
                </div>
                <div className={cls.Wrpflex}>
                    <div className={cls.contentTop}>
                        <div className={cls.flexEnd}>
                            <img src={user1} alt="img" />
                            <span className={cls.comment}>I can take care of your pitch</span>
                        </div>
                        <div className={cls.flexStart}>
                            <span className={cls.comment}>I can take care of your pitch</span>
                            <img src={user3} alt="img" />
                        </div>
                    </div>
                    <div className={cls.contentTop}>
                        <div className={cls.flexEnd}>
                            <span className={cls.comment}>I can take care of your pitch</span>
                            <img src={user2} alt="img" />
                        </div>

                        <div className={cls.flexStart}>
                            <img src={user4} alt="" />
                            <span className={cls.comment}>I can take care of your pitch</span>
                        </div>
                    </div>
                </div>
                <div className={cls.proButton}>
                    <GreenButton>Contact our expert</GreenButton>
                </div>
            </div>

        </div>
    )
}

export default Prosses
