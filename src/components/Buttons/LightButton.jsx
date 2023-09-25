import React from 'react'
import cls from './style.module.scss'
const LightButton = ({ children }) => {
    return (
        <button className={cls.lightButton}>{children}</button>
    )
}

export default LightButton
