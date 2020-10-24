import React,{useState} from 'react';
import Success from '../Success/Success';
import {db} from '../Firebase/Firebase';
import {
    Wrap,
    Head,
    Button,
    Label,
    Input,
    Field
} from './Order.elements';

const Order= (props) => {
    const order=props.location.state.order;
    const [modal,setModal]=useState(false);
    const closeModal=()=>setModal(false); 
    const [fname,setfName]=useState('');
    const [lname,setlName]=useState('');
    const [adress,setAdress]=useState('');
    const [city,setCity]=useState('');
    const [country,setCountry]=useState('');
    const [state,setState]=useState('');
    const [pin,setPin]=useState('');
    const [phone,setPhone]=useState('');
    let shipping=fname+','+lname+','+adress+','+city+','+country+','+state+',Pin:'+pin+',Ph.no:'+phone;
    return (
        <Wrap>
            <Head>Shipping Details</Head>
            <Field>
            <Label>First Name</Label>
            <Input type="text" name="fname" value={fname} onChange={e=>setfName(e.target.value)}placeholder="FirstName"></Input>
            <Label>Last Name</Label>
            <Input type="text" name="lname" value={lname} onChange={e=>setlName(e.target.value)} placeholder="LastName"></Input>
            <Label>Door No,Street</Label>
            <Input type="text" name="adress" value={adress} onChange={e=>setAdress(e.target.value)} placeholder="Adress"></Input>
            <Label>City/Town</Label>
            <Input type="text" name="city" value={city} onChange={e=>setCity(e.target.value)} placeholder="City"></Input>
            <Label>State</Label>
            <Input type="text" name="state" value={state} onChange={e=>setState(e.target.value)} placeholder="State"></Input>
            <Label>Country</Label>
            <Input type="text" name="country" value={country} onChange={e=>setCountry(e.target.value)} placeholder="Country"></Input>
            <Label>Pincode</Label>
            <Input type="text" name="pin" value={pin} onChange={e=>setPin(e.target.value)} placeholder="Pin"></Input>
            <Label>Phone Number</Label>            
            <Input type="tel" name="phone" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Phone no."></Input>
            <br></br>
            <Button onClick={()=>{
            db.collection("book").add({book:order.myCart,adress:shipping})
            .then(function() {
                setModal(true);  
            })
            .catch(error=>{
                console.log(error);
            }
            )
            }}>Deliver</Button>
            <Success show={modal} closeModal={closeModal}/>
            </Field>
        </Wrap>
    )
}

export default Order