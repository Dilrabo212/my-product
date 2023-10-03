import React from 'react'
import cls from './style.module.scss'
const Section4 = () => {
    return (
        <div className='container'>
            <form className={cls.form} action="">
                <h1 className={cls.titleForm}>Send a message</h1>
                <label className={cls.labelForm} htmlFor="">
                    <input className={cls.inputForm} type="text" placeholder='Your Name' />
                    <input className={cls.inputForm} type="text" placeholder='Your Email' />
                    <textarea className={cls.textareaForm} name="" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
                    <button className={cls.btnForm}>Send</button>
                </label>
            </form>
        </div>
    )
}

export default Section4
