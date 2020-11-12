import React,{useState} from 'react'
import {FaTrash} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {
    Productcard,
    CloseBtn,
    Bookname,
    Cost,
    BookType,
    Wrap,Modalhead,
    Head,
    Continue,
    Close,
    Checkout
} from './Cart.elements';

const Cart = (props) => {
    const productCarts=props.location.state.cart;
    const productCart=productCarts.myCart;
    return (   
        <Wrap>
         <Head>Your Cart</Head>
         <Link to="/bestsellers"><Continue>Continue Shoppping</Continue></Link>
         {productCart.map(proCart => (
             <Productcard>
             <Close><CloseBtn onClick={()=>{
                 let i=productCart.indexOf(proCart);
                 productCart.splice(i,1);
            }}><Link to={{pathname:'/cart',state:{cart:productCarts}}}><FaTrash></FaTrash></Link></CloseBtn></Close>
             <Modalhead>
             <Bookname>{proCart.name} {proCart.title}</Bookname>
             <Cost>{proCart.rate}</Cost>
             </Modalhead>
             <BookType>Hardcopy</BookType>
          </Productcard>        
      ))}
         
         <Link to={{pathname:'/order',state:{order:productCarts}}}><Checkout>Checkout</Checkout></Link>
        </Wrap>
    )
}

export default Cart