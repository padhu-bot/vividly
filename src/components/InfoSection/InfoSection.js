import React from 'react'
import {Container} from '../../GlobalStyles'
import {Link} from 'react-router-dom'
import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    Heading,
    Subtitle,
    Button,
    Img,
    ImgWrapper
} from './InfoSection.elements'; 

const InfoSection = ({headline,subtitle,alt,image,buttontext,btnlink}) => {
    return (
         <>
           <InfoSec>
               <Container>
                   <InfoRow>
                       <InfoColumn>
                           <TextWrapper>
                                <Heading >{headline}</Heading>
                                <Subtitle>{subtitle}</Subtitle>
                                <Link to={btnlink}><Button>{buttontext}</Button></Link>
                           </TextWrapper>
                       </InfoColumn>
                       <InfoColumn>
                           <ImgWrapper>
                            <Img src={image} alt={alt} /> 
                           </ImgWrapper>
                       </InfoColumn>
                   </InfoRow>
               </Container>
           </InfoSec>
         </> 
    )
}

export default InfoSection
