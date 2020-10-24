import React from 'react'
import {InfoSection,PriceCard} from '../../components';
import {headData,bodyData1} from './Data';
const Bestsellers = () => {
    return (
        <div>
            <InfoSection {...headData}/>
            <PriceCard {...bodyData1}></PriceCard>
        </div>
    )
}

export default Bestsellers