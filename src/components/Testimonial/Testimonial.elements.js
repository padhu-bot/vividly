import styled from 'styled-components';

export const TestimonialSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #F4F6FF;
`;

export const TestimonialWrapper = styled.div`
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

export const TestimonialHeading = styled.h1`
  color: #4F8A8B;
  font-size: 48px;
  margin-bottom: 1rem;
`;

export const TestimonialContainer = styled.div`
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

export const TestimonialCard = styled.div`
  background: #4F8A8B;
  box-shadow: 0 6px 6px rgba(56, 125, 255, 0.2);
  width: 280px;
  text-decoration: none;
  border-radius: 1rem;
  &:nth-child(2) {
    margin: 100px;
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

export const TestimonialCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  color: #fff;
`;


export const TestimonialContent = styled.p`
  font-size: 1rem;
  color:#fff;
  padding:1rem ;
`;
export const TestimonialName = styled.h4`
  font-size: 1.5rem;
  color: #F9D56E;
  padding:1rem;
  border-bottom: 1px dashed #fff;
`;
