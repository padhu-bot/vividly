import styled from 'styled-components';

export const PricingSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #F4F6FF;
`;

export const PricingWrapper = styled.div`
  display: flex;
  padding:75px 0 50px;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const PricingHeading = styled.h1`
  color: #4F8A8B;
  font-size: 48px;
  margin-bottom: 1rem;
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


export const StepCardContent = styled.p`
  font-size: 1.5rem;
  color:#4F8A8B;
  padding:2rem 0;
`;

export const StepCard = styled.div`
  background:rgba(79, 138, 139, 0.22);
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 300px;
  text-decoration: none;
  align-items:center ;
  &:nth-child(2) {
    margin: 100px;
  }  
`;
export const StepCardImage=styled.img`
width:230px;
height:180px;
`;
export const StepCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  width: 300px;
  height: 550px;
  padding:4rem 3rem;
`;