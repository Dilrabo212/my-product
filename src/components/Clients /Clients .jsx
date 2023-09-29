import React from 'react'
import cls from './style.module.scss'
import user1 from '../../assets/images/Ellipse 2 (2).png'
import user2 from '../../assets/images/Ellipse 2 (1).png'
import user3 from '../../assets/images/Ellipse 2.png'
import ClientCard from '../ClientCart/ClientCard'
const Clients = () => {
    return (
        <div className={cls.clients}>
            <div className='container'>
                <div className={cls.center}>
                    <h1 className={cls.pricingTitle}>What Clients Say</h1>
                    <p className={cls.pricingText}>Problems trying to resolve the conflict between
                        the two major realms of Classical physics: Newtonian mechanics </p>
                    <div className={cls.pricingTable}>
                        <ClientCard
                            img={user1}
                            description='Product helps you see how many
                            more days you need to work to
                            reach your financial goal.'
                            name={'Wahid Ari'}
                            profession='Founder'
                            reiting={5}
                        />
                        <ClientCard
                            img={user2}
                            description='Product helps you see how many
                            more days you need to work to
                            reach your financial goal.'
                            name={'Wahid Ari'}
                            profession='Founder'
                            reiting={4}
                        />
                        <ClientCard
                            img={user3}
                            description='Product helps you see how many
                            more days you need to work to
                            reach your financial goal.'
                            name={'Wahid Ari'}
                            profession='Founder'
                            reiting={3}
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients 
