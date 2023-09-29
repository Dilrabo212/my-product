import React from 'react'
import cls from './style.module.scss'
import { GreenButton, PlayBtn } from '../../components/Buttons'
import ProductBuild from '../../components/ProductBuild/ProductBuild'
import Management from '../../components/Management/Management'
import Customer from '../../components/CustomerSupport/Customer'
import Collaborative from '../../components/Collaborative/Collaborative'
import hero from '../../assets/images/amico1.png'
import Prosses from '../../components/Prosses/prosses'
import Strategies from '../../components/Strategies/Strategies'
import Pricing from '../../components/Pricing/Pricing'
import Clients from '../../components/Clients /Clients '
import JoinClient from '../../components/JoinClient/JoinClient'
export const Home = () => {
  return (
    <>
      <div className='container'>
        <div className={cls.flex}>
          <div className={cls.leftContent}>
            <h1 className={cls.mainTitle}>
              Work  at the speed
              of thought
            </h1>
            <p className={cls.mainText}>Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.</p>
            <div className={cls.flexBtn}>
              <GreenButton>Get Started</GreenButton>
              <PlayBtn>Watch the Video</PlayBtn>
            </div>

          </div>
          <div className={cls.rightContent}>
            <img src={hero} alt="sotsialImg" />
          </div>
        </div>
      </div>
      <ProductBuild />
      <Management />
      <Customer />
      <Collaborative />
      <Prosses />
      <Strategies />
      <Pricing />
      <Clients />
      <JoinClient />
    </>
  )
}
