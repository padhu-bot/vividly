import React from 'react'
import {InfoSection} from '../../components';
import {headData} from './Data';
import {Head,Image,Wrap,Imgbox} from './Corporate.element';
import {
    TestimonialSection,
    TestimonialWrapper,
    TestimonialHeading,
    TestimonialContainer,
    TestimonialCard,
    TestimonialCardInfo,
    TestimonialContent,
    TestimonialName,
    Info
} from './Corporate.element'

const Corporate = () => {
    return (
        <Wrap>
            <InfoSection {...headData}/>
            <Head>Our clients</Head>
            <Imgbox>
            <Image src='images/l1.jpg'/>
            <Image src='images/l2.jpg'/>
            </Imgbox>
            <TestimonialSection>
        <TestimonialWrapper>
          <TestimonialHeading>Our customers voice!</TestimonialHeading>
          <TestimonialContainer>
            <TestimonialCard >
              <TestimonialCardInfo>
                <TestimonialName>Math love</TestimonialName>
                <Info>MathLove  aims to  provide a joyful, purposeful and rigorous math learning environment for children through our holistic learning model. We strive to make math the most loved subject for every child and transform them as confident math learners and problem solvers. </Info>
                <TestimonialContent>Was a great experience for us to work with team Vividly Written. We at Math Love, loved the creativity of their work. Their responses were also prompt and we loved the fact that they took efforts to make sure that their clients like their work" ️</TestimonialContent>
              </TestimonialCardInfo>
            </TestimonialCard>
            <TestimonialCard >
              <TestimonialCardInfo> 
              <TestimonialName> Fun City</TestimonialName> 
               <Info>Fun City forms an integral part of the society by providing a platform to children from 1-12 years old for social interactions and active play in a safe, secure and conveniently accessed location.</Info>              
              <TestimonialContent>"Vividly Written had the opportunity to work with Funcity. We held a storytelling session with an illustrated story of two kids and their dog discovering the magic land of funcity as a reward for their socially responsible behaviour in the middle of a pandemic. "</TestimonialContent>
              </TestimonialCardInfo>
            </TestimonialCard>           
          </TestimonialContainer>
        </TestimonialWrapper>
        </TestimonialSection> 
        </Wrap>
    )
}

export default Corporate