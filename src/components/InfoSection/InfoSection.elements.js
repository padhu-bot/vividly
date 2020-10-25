import styled from 'styled-components';

export const InfoSec=styled.div`
color:#fff;
padding:160px,0;
background:#4F8A8B;
`;

export const InfoRow=styled.div`
display:flex;
margin:0 -15px -15px -15px;
flex-wrap: wrap;
align-items: center;
padding:50px 0;
`;

export const InfoColumn= styled.div`
margin-bottom:15px;
padding:0 15px;
flex:1;
max-width:50%;
flex-basis:50%;

@media screen and (max-width:960px){
    max-width:100%;
    flex-basis:100%;
    display:flex;
    justify-content:center;
}
`;

export const TextWrapper=styled.div` 
max-width:540px;
padding-bottom:60px;

@media screen and (max-width:740px){
    padding-bottom:65px;
}
`;

export const Heading=styled.h1` 
margin:24px 0;
font-size:48px;
line-height: 1.1;
color:#fff;
font-family: 'Quicksand', sans-serif;
font-weight: 500;
`;

export const Subtitle=styled.p`
max-width:440px;
margin-bottom:50px;
font-size:1rem;
line-height:24px;
font-family: 'Quicksand', sans-serif;
font-weight: 300;
`;

export const Button=styled.button`
background: #364F6B;
color:#fff;
height:3.5rem;
width:11rem;
border: none;
border-radius: 0.75rem;
font-size:1.25rem;
&:hover{
    color: #364F6B;
    background:#FBD46D;
    border:2px solid #364F6B;
}
`;

export const ImgWrapper= styled.div`
max-width:555px;
display:flex;
justify-content:flex-end;
`;

export const Img=styled.img` 
padding-right:0;
border:0;
max-width:100%;
vertical-align:middle;
display:inline-block;
max-height:400px;
`;
