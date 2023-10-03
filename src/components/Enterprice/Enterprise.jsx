import React from 'react'
import cls from './style.module.scss'
import { GreenButton } from '../Buttons'
import img from '../../assets/images/enterprise.png'
import img2 from '../../assets/images/Image.png'
import { Addition, Ent1, Ent2, Ent3, Subtraction } from '../../icons/svj'
const Enterprise = () => {
    return (
        <div className={cls.wrp}>
            <div className="container">
                <div className={cls.enterprise}>
                    <h2 className={cls.entTitle}>ENTERPRISE</h2>
                    <h1 className={cls.entText}>Are you interested  in a custom-tailored plan?</h1>
                    <p className={cls.subTitle}>Product is a set of advanced features for really large teams with projects.</p>
                    <GreenButton>Get in touch with us</GreenButton>
                </div>
                <div className={cls.wrapper}>

                    <span className={cls.entTexT}>Product is being used with great effects alongside:</span>
                    <div className='container'>
                        <div className={cls.entflex}>
                            <div className={cls.imgContent}>
                                <img className={cls.img1} src={img} alt="" />
                                <img className={cls.img2} src={img2} alt="" />
                            </div>
                            <div className={cls.textContent}>

                                <span className={cls.flexText}>
                                    <Ent1 />
                                    <span className={cls.entTitleS}>Enterpreneur</span>
                                </span>
                                <p className={cls.subTitleP}>Product is a great way to help medium and samall enterprise owners achieve their goals</p>
                                <span className={cls.flexText}>
                                    <Ent2 />
                                    <span className={cls.entTitleS}>Accountants</span>
                                </span>
                                <p className={cls.subTitleP}>Whether you are working on contract with clients, or on other key accounting documents, Product is for you</p>

                                <span className={cls.flexText}>
                                    <Ent3 />
                                    <span className={cls.entTitleS}>Universities</span>
                                </span>
                                <p className={cls.subTitleP}>Organize university projects and have documents easily graded online with Product</p>

                            </div>
                        </div>
                    </div>
                </div>

                <div className={cls.enterprise}>
                    <h1 className={cls.entText}>Frequently asked question</h1>
                    <p className={cls.subTitle}>Something is not clear? You need help? Check our FAQ section</p>
                    <div className='container'>

                        <div className={cls.question}>
                            <span className={cls.flexQuest}>
                                <span><Addition /></span>
                                <span className={cls.quest}>What are my payment option?</span>
                            </span>
                            <hr className={cls.hr} />
                            <span className={cls.flexQuest}>
                                < Subtraction />
                                <span className={cls.quest}>How can I invite collaborator to platform?</span>
                            </span>
                            <p className={cls.subTitleQ}>After creating your account you will have an oppurtunity to create your first project that will be associated withthe collaborators e-mail. An invitation  will be sent automatically. Then, invited user will have to confirm his account by e-mail and finish userd onboarding.</p>
                            <hr className={cls.hr} />
                            <span className={cls.flexQuest}>
                                <Addition />
                                <span className={cls.quest}>Can I upgrade my plan?</span>
                            </span>
                            <hr className={cls.hr} />
                            <span className={cls.flexQuest}>
                                <Addition />
                                <span className={cls.quest}>Can I cancel my plan at anytime?</span>
                            </span>
                            <hr className={cls.hr} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Enterprise
