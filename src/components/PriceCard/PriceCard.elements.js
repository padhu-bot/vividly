import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PricingSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #F4F6FF;
`;

export const PricingWrapper = styled.div`
  display: flex;
  padding:${({heading})=>(heading?'75px 0 50px':'0')};
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 960px) {
    padding:75px 0 20px;
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const PricingHeading = styled.h1`
  color: #4F8A8B;
  font-size: 48px;
  margin: 2rem 0 1rem;
  display:${({heading})=>(heading?'inline':'none')};

`;

export const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const PricingCard = styled(Link)`
  background:rgba(79, 138, 139, 0.3);
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.1);
  width: 280px;
  text-decoration: none;
  border-radius: 1rem;
  &:nth-child(2) {
    margin: 50px 100px ;
  }
  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }
  @media screen and (max-width: 960px) {
    border-radius: 1rem;
    &:hover {
      transform: none;
    }
  }
`;

export const PricingCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  color: #fff;
`;


export const PricingCardImage=styled.img`
width:100%;
height:250px;
border-radius:0.75rem;
`;

export const Button=styled.button`
background:#4F8A8B ;
color:#fff;
padding:1rem;
border: none;
border-radius: 0.75rem;
margin:1rem 0;
font-size:1rem;
&:hover{
    color:#FBD46D ;
    background:#364F6B;
}
`;