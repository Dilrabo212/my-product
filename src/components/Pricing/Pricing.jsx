import React from 'react'
import cls from './style.module.scss'
import GreenButton from '../Buttons/GreenButton'
const Pricing = () => {
    return (
        <div className={cls.pricing}>
            <div className="container">
                <div className={cls.center}>
                    <h1 className={cls.pricingTitle}>Price Table</h1>
                    <p className={cls.pricingText}>We offer competitive price</p>
                </div>
                <div className={cls.pricingTable}>
                    <div className={cls.preCart}>
                        <div className={cls.cart}>Free</div>
                        <p className={cls.description}>Brief price description</p>
                        <span className={cls.flex}>
                            <span className={cls.price}>0</span>
                            <span className={cls.dollor}>
                                <span className={cls.namePre}>$</span>
                                <span className={cls.perMonth}>Per / month</span>
                            </span>
                        </span>
                        <h3 className={cls.infoPre}>Only 2 Operators</h3>
                        <h3 className={cls.infoPre}>Notifications</h3>
                        <h3 className={cls.infoPre}>Landing Pages</h3>
                        <button className={cls.grenBtn}> Order Now</button>
                    </div>
                    {/* //!preCartActive */}
                    <div className={cls.preCartActive}>
                        <div className={cls.cartActive}>Standard</div>
                        <p className={cls.descriptionActive}>Brief price description</p>
                        <span className={cls.flexActive}>
                            <span className={cls.priceActive}>5</span>
                            <span className={cls.dollorActive}>
                                <span className={cls.namePreActive}>$</span>
                                <span className={cls.perMonthActive}>Per / month</span>
                            </span>
                        </span>
                        <h3 className={cls.infoPreActive}>5+ Operators</h3>
                        <h3 className={cls.infoPreActive}>Notifications</h3>
                        <h3 className={cls.infoPreActive}>Landing Pages</h3>
                        <button className={cls.grenBtnActive}> Order Now</button>
                    </div>
                    {/* //!preCartActive */}
                    <div className={cls.preCart}>
                        <div className={cls.cart}>Premium</div>
                        <p className={cls.description}>Brief price description</p>
                        <span className={cls.flex}>
                            <span className={cls.price}>10</span>
                            <span className={cls.dollor}>
                                <span className={cls.namePre}>$</span>
                                <span className={cls.perMonth}>Per / month</span>
                            </span>
                        </span>
                        <h3 className={cls.infoPre}>10+ Operators</h3>
                        <h3 className={cls.infoPre}>Notifications</h3>
                        <h3 className={cls.infoPre}>Landing Pages</h3>
                        <button className={cls.grenBtn}> Order Now</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Pricing