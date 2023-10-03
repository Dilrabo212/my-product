import React from 'react'
import cls from './style.module.scss'
import PricingCard from '../../components/PricingCard/PricingCard'

import JoinClient from '../../components/JoinClient/JoinClient'
import Enterprise from '../../components/Enterprice/Enterprise'
const PricePage = () => {
    return (
        <div className={cls.pricing}>
            <div className="container">
                <div className={cls.center}>
                    <h2 className={cls.pricingTitleH2}>PRICING</h2>
                    <h1 className={cls.pricingTitle}>Let’s get some real work done here.</h1>
                    <p className={cls.pricingText}>Prodict is your perfect solution for working. Get started now for free</p>
                </div>
                <div className={cls.pricingTable}>
                    <PricingCard
                        title={'Free'}
                        description={'Brief price description'}
                        price={0}
                        operators={2}
                    />
                    <PricingCard
                        title={'Standard'}
                        description={'Brief price description'}
                        price={10}
                        operators={10}
                    />
                    <PricingCard
                        title={'Premium'}
                        description={'Brief price description'}
                        price={15}
                        operators={15}
                    />

                </div>

            </div>
            <Enterprise />

            <JoinClient />

        </div>
    )
}

export default PricePage
