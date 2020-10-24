import React from 'react'
import {InfoSection,Testimonial,PriceCard} from '../../components';
import {headData, subData,bodyData1,bodyData2} from './Data';
const Bestsellers = () => {
    return (
        <div>
            <InfoSection {...headData}/>
            <PriceCard {...bodyData1}></PriceCard>
            <PriceCard {...bodyData2}></PriceCard>
            <InfoSection {...subData}/>
            < Testimonial />
        </div>
    )
}

export default Bestsellers
