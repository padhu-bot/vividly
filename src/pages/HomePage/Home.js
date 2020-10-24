import React from 'react'
import {InfoSection,Steps,Testimonial,PriceCard} from '../../components';
import {homeData,bodyData} from '../../pages/HomePage/Data';

const Home = () => {
    return (
        <>
            <InfoSection {...homeData}/>
            <PriceCard {...bodyData}></PriceCard>
            <Steps {...bodyData}/>
            < Testimonial />
        </>
    )
}

export default Home
