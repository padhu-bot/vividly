import React from 'react'
import {
    PricingSection,
    PricingWrapper,
    PricingHeading,
    PricingContainer,
    PricingCard,
    PricingCardInfo,
    PricingCardImage,
    Button
} from './PriceCard.elements';

const PriceCardhome = ({book1,book2,book3,heading,isheading}) => {
    return (   
        <PricingSection>
        <PricingWrapper>
    <PricingHeading heading={isheading}>{heading}</PricingHeading>
          <PricingContainer>
            <PricingCard to={{pathname:'/viewbook',state:{product:book1[0]}}}>
              <PricingCardInfo>
                <PricingCardImage src={'/images/book'+book1[0].id+'.webp'} alt="book1"/>
               <Button to={{pathname:'/viewbook',state:{product:book1[0]}}}>Personalize </Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to={{pathname:'/viewbook',state:{product:book2[0]}}}>
              <PricingCardInfo>
                <PricingCardImage src={'/images/book'+book2[0].id+'.webp'} alt="book2"/>
                <Button>Personalize </Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to={{pathname:'/viewbook',state:{product:book3[0]}}}>
              <PricingCardInfo>
                <PricingCardImage src={'/images/book'+book3[0].id+'.webp'} alt="book3"/>
                 <Button>Personalize</Button>
              </PricingCardInfo>
            </PricingCard>            
          </PricingContainer>
        </PricingWrapper>
        </PricingSection>
    )
}

export default PriceCardhome
