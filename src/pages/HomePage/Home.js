import React from 'react'
import {InfoSection,Steps,Testimonial,PriceCardhome} from '../../components';
import {homeData,bodyData} from '../../pages/HomePage/Data';

const Home = () => {
    return (
        <>
            <InfoSection {...homeData}/>
            <PriceCardhome {...bodyData}></PriceCardhome>
            <Steps {...bodyData}/>
            < Testimonial />
        </>
    )
}

export default Home
