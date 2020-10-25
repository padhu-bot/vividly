import React,{useState} from 'react'
import {Container} from '../../GlobalStyles'
import Personalize from '../Personalize/Personalize'
import {Link} from 'react-router-dom'
import {productData} from '../HomePage/Data'
import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    ImgWrapper,
    Title,
    Content,
    Feature,
    Button,Cost,Img,Thumb,Imgbox,Backdrop
} from './View.element'; 


const View= (props) => {
    const book=props.location.state.product?props.location.state.product:props.route.state.product;
    const [imgArr,setNum]=useState({imgNum:book.id});
    const [modal,setModal]=useState(false);
    const [personalize,setPersonal]=useState({name:book.name,gender:book.gender,friend:book.friend});
    const closeModal=()=>setModal(false); 
    const setTitle=(a)=>{
        setPersonal({name:a.name,gender:a.gender,friend:a.friend});
        book.name=a.name;
        book.gender=a.gender;
        book.friend=a.friend;
    }; 
    return (        
        <div>
            {modal?<Backdrop onClick={closeModal}></Backdrop>:null}
            <InfoSec>
               <Container>
                   <InfoRow>
                       <InfoColumn>
                            <ImgWrapper>
                                  <Thumb>
                                      <li><a onClick={() => setNum(prevState => ({...prevState, imgNum: book.id }))}><Img src={"vividly/images/book"+book.id+".webp"}></Img></a></li>
                                      <li><a onClick={() => setNum(prevState => ({...prevState, imgNum: book.id+'b' }))}><Img src={"vividly/images/book"+book.id+"b.webp"}></Img></a></li>
                                      <li><a onClick={() => setNum(prevState => ({...prevState, imgNum: book.id+'c' }))}><Img src={"vividly/images/book"+book.id+"c.webp"}></Img></a></li>
                                  </Thumb>  
                                  <Imgbox src={"vividly/images/book"+imgArr.imgNum+".webp"} id="imgbox"></Imgbox>
                            </ImgWrapper>                          
                       </InfoColumn>                       
                       <InfoColumn>
                           <TextWrapper>
                               <h2>Preview</h2>
                                <Title>{book.name}{book.title}</Title>
                                <Content>Main character : <b>{book.name}</b></Content>
                                <Content>{book.brief}</Content>
                                <Feature>Full Color Illustrations</Feature>
                                <Feature>Premium Paper</Feature>
                                <Cost>{book.rate}</Cost>
                                <Link to={{pathname:'/cart',state:{cart:productData}}}>
                                <Button onClick={()=>productData.myCart.push(book)} >Add to cart</Button>
                                </Link>                               
                                <Button onClick={()=>setModal(true)}>Personalize</Button>
                                <Personalize show={modal} setTitle={setTitle} closeModal={closeModal}/>                                
                           </TextWrapper>
                       </InfoColumn>
                   </InfoRow>
               </Container>
           </InfoSec>
        </div>
    )
}
export default View