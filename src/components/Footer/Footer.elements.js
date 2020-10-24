import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FooterContainer=styled.div`
background-color:#4F8A8B;
padding:4rem 0 2rem;
display:flex;
flex-direction:column;
justify-content:feComponentTransfer;
align-items:center;
`;

export const FooterLinksContainer=styled.div`
width:100%;
max-width:1000px;
display:flex;
justify-content:center;

@media screen and (max-width:820px){
    padding-top:32px;
}
`;

export const FooterLinksWrapper=styled.div`
display:flex;
@media screen and (max-width:820px){
flex-direction:column;
}
`;

export const FooterLinkItems=styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
margin:16px;
text-align:left;
width:300px;
box-sizing:border-box;
color:#fff;

@media screen and (max-width:420px){
    margin:0;
    padding:10px;
    width: 100% auto;
}
`;

export const FooterTitle=styled.h2`
margin-bottom:16px;
color:#2F2E41;
font-size:1.25rem;
`;


export const FooterLink=styled(Link)`
color:#fff;
text-decoration:none;
margin-bottom:0.5rem;

&:hover{
    color:#FBD46D;
    transition: 0.3s ease-out;
}
`;

export const SocialMedia=styled.section`
max-width:100px;
width:100%;
`;

export const SocialMediaWrapper=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:90%;
max-width:100px;
margin-inline-end:40px auto 0;

@media screen and (max-width:820px){
    flex-direction:column;
}
`;

export const SocialIcons =styled.div`
display:flex;
justify-content:space-around;
align-items:center;
width:240px;
`;

export const SocialIconLink=styled.a`
color:#fff;
font-size:24px;
`;

