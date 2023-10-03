import React from 'react'
import cls from './style.module.scss'
import mac1 from '../../assets/images/mac1.png'
import mac2 from '../../assets/images/mac2.png'
import mac3 from '../../assets/images/mac3.png'
import GreenButton from '../Buttons/GreenButton'
const Section3 = () => {
    return (
        <div className='container'>
            <h1 className={cls.productTitle}>How Product Work?</h1>
            <div className={cls.stepWrapper1}>
                <div className={cls.imageContent}>
                    <img src={mac1} alt="" />
                </div>
                <div className={cls.textContent}>
                    <h3 className={cls.step}>STEP 1</h3>
                    <h1 className={cls.stepTitle}>Apply for a product</h1>
                    <p className={cls.stepDescription}>Completing our easy step-by-step application form gives you access to multiple business with multiple products. We analyse your business through our proprietary credit analysis technology </p>
                </div>

            </div>

            <div className={cls.stepWrapper2}>

                <div className={cls.textContent}>
                    <h3 className={cls.step}>STEP 2</h3>
                    <h1 className={cls.stepTitle}>Apply for a product</h1>
                    <p className={cls.stepDescription}>Product will contactting you instantly to receive payment of the Application Fee. if no offer of product is available, your fee will be fully refunded.</p>
                </div>
                <div className={cls.imageContent}>
                    <img src={mac2} alt="" />
                </div>

            </div>

            <div className={cls.stepWrapper1}>
                <div className={cls.imageContent}>
                    <img src={mac3} alt="" />
                </div>
                <div className={cls.textContent}>
                    <h3 className={cls.step}>STEP 3</h3>
                    <h1 className={cls.stepTitle}>Completion</h1>
                    <p className={cls.stepDescription}>Product will continue to liase between borrower and manager to procees and complete a quick and efficient settlement</p>
                </div>

            </div>
            <div className={cls.btn}><GreenButton>Get in touch with us</GreenButton></div>

        </div>
    )
}

export default Section3
