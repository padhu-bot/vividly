import React from 'react'
import {
    PricingSection,
    PricingWrapper,
    PricingHeading,
    PricingContainer,
    StepCard,
    StepCardContent,
    StepCardImage,
    StepCardInfo,
} from './Steps.elements';
const Steps = ({step1,step2,step3}) => {
    return (
      <PricingSection> 
        <PricingWrapper>
          <PricingHeading>Customize in 3 steps!</PricingHeading>
          <PricingContainer>
            <StepCard>
              <StepCardInfo>
                <StepCardImage src={step1} alt="book1"/>
                <StepCardContent>Tell us what your favourite people love! Or your family’s treasured stories or just those unforgettable moments of your life !</StepCardContent>
              </StepCardInfo>
            </StepCard>
            <StepCard>
              <StepCardInfo>
                <StepCardImage src={step2} alt="book1"/>
                <StepCardContent>We will get back to you with an amazing stories that has all your favourite things interlaced with scientific facts and accurate cultural representation !</StepCardContent>
              </StepCardInfo>
            </StepCard>
            <StepCard>
              <StepCardInfo>
                <StepCardImage src={step3} alt="book1"/>
                <StepCardContent>Your book is done! And will reach you at the earliest.</StepCardContent>
              </StepCardInfo>
            </StepCard>                        
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>        
    )
}

export default Steps
