import styled from 'styled-components';

export const ModalWrap=styled.div`
opacity:${({show})=>(show?'1':'0')};
transform:${({show})=>(show?'translateY(0vh)':'translateY(-100vh)')};
background:#B3E5AF;
width:80%;
max-width:500px;
border-radius:5px;
padding:1rem;
transition:all 0.7s ease;
top:20%;
right:10%;
position:fixed;
`;

export const Modalhead=styled.div`
padding:1rem;
display:flex;
align-items:center;
justify-content:space-between;
`;

export const ModalClosebtn=styled.button`
font-size:1.5rem;
padding:2px 10px;
cursor:pointer;
margin:1rem;
background:#ED4E4E;
border:none;
border-radius:5px;
`;

export const ModalContent=styled.form`
padding:1rem;
`;

export const ModalBody=styled.div`
margin:1rem 0 2rem 0;
color:green;
font-size:1.25rem;
`;

export const ModalFooter=styled.div`
align-content:right;
`;

export const CloseBtn=styled.button`
display:block;
margin-left:auto;
font-size:1rem;
background:#000;
border:none;
color:#fff;
padding:0.75rem;
border-radius:5px;
cursor:pointer;
@media screen and (max-width:740px){
    margin:1rem;
}
`;

export const Label=styled.p`
padding:1rem;
`;

export const Input=styled.input`
border:none;
border-radius:5px;
padding:0.5rem;
margin:0 1rem;
`;