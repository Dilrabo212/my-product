import React from 'react'
import cls from './style.module.scss'

const GreenButton = ({ children }) => {
    return (
        <button className={cls.greenButton}>{children}</button>
    )
}

export default GreenButton
