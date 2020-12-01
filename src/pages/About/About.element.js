import styled from 'styled-components';

export const Head=styled.h1`
text-align:center;
padding:1.5rem;
color:#4F8A8B;
`;

export const Content=styled.p`
font-size:1.5rem;
line-height:2.5rem;
padding-bottom:3rem;
width:80%;
align-self:center;
`;

export const Team = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #F4F6FF;
`;

export const TeamWrapper = styled.div`
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

export const TeamContainer = styled.div`
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

export const TeamCard = styled.div`
  background:rgba(79, 138, 139, 0.3);
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.1);
  width: 250px;
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

export const TeamCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  color: #fff;
`;


export const TeamCardImage=styled.img`
width:100%;
height:250px;
border-radius:0.75rem;
`;

export const Name=styled.h3`
color:#14274e;
font-size:1rem;
padding:1rem;
font-weight:bold;
`;

export const Info=styled.p`
color:#000;
font-size:0.75rem;
padding:0 1rem 1rem;
`;