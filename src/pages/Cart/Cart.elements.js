import styled from 'styled-components';


export const Productcard=styled.div`
background:rgb(79,138,139,0.20);
width:80%;
max-width:500px;
border-radius:5px;
padding:1rem 2rem;
border-bottom:1px dashed grey;
`; 
export const CloseBtn=styled.button`
padding:5px;
cursor:pointer;
color:#ED4E4E;
border:none;
background:rgb(79,138,139,0.20);
border-radius:5px;
margin-bottom:1rem;
`;
export const Modalhead=styled.div`
display:flex;
align-items:center;
justify-content:space-between;
`;

export const Bookname=styled.span`
font-size:1.5rem;
font-weight:bold;
`;

export const Cost=styled.span`
color:blue;
font-size:1.25rem;
`;

export const BookType=styled.div`
color:green;
`;
export const Wrap=styled.div`
padding:2rem 10%;
background:#F4F6FF;
`;
export const Head=styled.h2`
font-size:2rem;
padding-bottom:3rem;
color:#4F8A8B;
`;

export const Continue=styled.p`
color:green;
font-size:1.25rem;
`;
export const Close=styled.p`
text-align:right;
`;
export const Checkout=styled.button`
padding:0.75rem 2.5rem;
margin:3rem 0;
background:#4BB543;
border:none;
border-radius:5px;
font-size:1.5rem;
font-weight:bold;
`;