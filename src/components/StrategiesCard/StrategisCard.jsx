import React from 'react'
import cls from './style.module.scss'

const StrategisCard = ({
    img,
    name,
    date,
    description
}) => {
    return (
        <div className={cls.strCard}>
            <img src={img} alt="" />
            <span className={cls.info}>
                By
                <b className={cls.bold}>{name}</b>
                | {date}
            </span>
            <span className={cls.nameStr}>{description}</span>
        </div>
    )
}

export default StrategisCard
