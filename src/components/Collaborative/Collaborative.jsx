import React from 'react'
import sty from './style.module.scss'
import coll from '../../assets/images/amico3.png'
const Collaborative = () => {
    return (
        <div className={sty.collaborative}>
            <div className='container'>
                <div className={sty.flex}>
                    <div className={sty.leftContent}>
                        <h3 className={sty.subTitle}>Optimisation for</h3>
                        <h2 className={sty.mainTitle}>Collaborative </h2>
                        <p className={sty.text}>Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior. </p>
                        <h3 className={sty.subTitle}>Accessory makers</h3>
                        <p className={sty.text}>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun</p>
                        <h3 className={sty.subTitle}>Alterationists</h3>
                        <p className={sty.text}>If you are looking for a new way to promote your business that won’t cost you more money, </p>

                    </div>
                    <div className={sty.rightContent}>
                        <img src={coll} alt="" />
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Collaborative
