import React from 'react'
import cls from './style.module.scss'
// const tarifCard1 ={
//     ['className']: 'tarifCard1',
//     title: 'Free',
//     description: 'Brief price description',
//     price: 5,
//     operators: 5,
// }
// const tarifCard2 ={
//     title: 'Standard',
//     description: 'Brief price description',
//     price: 10,
//     operators: 10,
// }
// const tarifCard3 ={
//     title: 'Premium',
//     description: 'Brief price description',
//     price: 15,
//     operators: 15,
// }




export const PricingCard = ({
    title,
    description,
    price,
    operators
}) => {
    return <>
        <div className={cls.preCart}>
            <div className={cls.cart}>{title}</div>
            <p className={cls.description}>{description}</p>
            <span className={cls.flex}>
                <span className={cls.price}>{price}</span>
                <span className={cls.dollor}>
                    <span className={cls.namePre}>$</span>
                    <span className={cls.perMonth}>Per / month</span>
                </span>
            </span>
            <h3 className={cls.infoPre}>{operators} + operators</h3>
            <h3 className={cls.infoPre}>Notifications</h3>
            <h3 className={cls.infoPre}>Landing Pages</h3>
            <button className={cls.grenBtn}> Order Now</button>
        </div>
    </>
}

export default PricingCard
