import styled from 'styled-components';

export const InfoSec=styled.div`
color:#000;
padding:160px,0;
background:#F4F6FF;
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
max-width:400px;
background:rgb(79,138,139,0.20);
color: #3F3D56;
padding:2rem;
@media screen and (max-width:740px){
    padding:1rem;
}
`;


export const ImgWrapper= styled.div`
max-width:555px;
display:flex;
justify-content:flex-end;
`;

export const Title=styled.h3`
padding-top:1rem;
`;

export const Content=styled.p`
padding:1rem 0;
`;

export const Feature=styled.p`
margin:1rem 0;
`;

export const Cost=styled.h3`
color:#FC5185;
padding:1rem 0;
`;

export const Button=styled.button`
background:#4F8A8B ;
color:#fff;
padding:0.5rem 2rem;
border: none;
border-radius: 0.5rem;
font-size:1rem;
margin:0 0.5rem 0 0;
&:hover{
    color:#FBD46D ;
    background:#364F6B;
}
@media screen and (max-width:740px){
    margin:0.5rem;
}
`;

export const Img=styled.img`
height:120px;
width:120px;
@media screen and (max-width:740px){
    height:70px;
    width:70px;
}
`;

export const Thumb=styled.ul`
list-style-type:none;
`;

export const Imgbox=styled.img`
margin-left:5px;
height:350px;
width:350px;
border:1px solid rgb(0,0,0,0.2);
overflow:hidden;
@media screen and (max-width:740px){
    height:250px;
    width:250px;
}
`;

export const Backdrop=styled.div`
background:rgba(63,61,61,0.692);
width:100%;
height:100%;
position:fixed;
transition:all 1.3s;
`;
