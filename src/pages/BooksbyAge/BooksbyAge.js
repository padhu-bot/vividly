import React from 'react'
import {InfoSection,Testimonial,PriceCard} from '../../components';
import {headData,bodyData1,bodyData2,bodyData3,bodyData4} from './Data';
const Bestsellers = () => {
    return (
        <div>
            <InfoSection {...headData}/>
            <PriceCard {...bodyData1}></PriceCard>
            <PriceCard {...bodyData3}></PriceCard>
            <PriceCard {...bodyData4}></PriceCard>
            <PriceCard {...bodyData2}></PriceCard>
            < Testimonial />
        </div>
    )
}

export default Bestsellers