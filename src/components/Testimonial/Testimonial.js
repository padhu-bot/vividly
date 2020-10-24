import React from 'react'
import {
    TestimonialSection,
    TestimonialWrapper,
    TestimonialHeading,
    TestimonialContainer,
    TestimonialCard,
    TestimonialCardInfo,
    TestimonialContent,
    TestimonialName
} from './Testimonial.elements'

const Testimonial = () => {
    return (
        <TestimonialSection>
        <TestimonialWrapper>
          <TestimonialHeading>Our customers voice!</TestimonialHeading>
          <TestimonialContainer>
            <TestimonialCard >
              <TestimonialCardInfo>
                <TestimonialName>Karthika Jeeva</TestimonialName>
                <TestimonialContent>"You have no idea how much this work you will be doing means to me. I feel this is going to be the best I will be gifting Rithvik. Thank you so much for all the efforts you guys put to bring that smile on a kid. God bless your team" ️</TestimonialContent>
              </TestimonialCardInfo>
            </TestimonialCard>
            <TestimonialCard >
              <TestimonialCardInfo> 
              <TestimonialName>Kaavya Sanjan</TestimonialName>                 
              <TestimonialContent>"This book is so close to my heart for many reasons and I'm sure Liam is going to enjoy reading it."</TestimonialContent>
              </TestimonialCardInfo>
            </TestimonialCard>
            <TestimonialCard >
              <TestimonialCardInfo>
              <TestimonialName>Saranya Venkatesh</TestimonialName>
              <TestimonialContent>"With minute details I had given them about Avyaan's likes, building such a lovely story with all the graphical representation is super impressive. I love how they have put all of Avyaan's favourite characters and built beautiful story around it , most importantly the moral is something I really appreciate."</TestimonialContent>
              </TestimonialCardInfo>
            </TestimonialCard>                 
          </TestimonialContainer>
        </TestimonialWrapper>
        </TestimonialSection>   
    )
}

export default Testimonial
