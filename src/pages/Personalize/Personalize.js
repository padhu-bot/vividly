import React,{useState} from 'react';
import {
    ModalWrap,
    Modalhead,
    ModalClosebtn,
    ModalContent,
    CloseBtn,
    Input,
    Label
} from './Personalize.elements';
const Personalize= ({show,closeModal,setTitle}) => {
 
   const [name,setName]=useState('');
   const [gender,setGender]=useState('');
   const [fname,setfName]=useState('');
 
   let handleName=(e)=>{
       setName(e.target.value)
   }
   let handleGender=(e)=>{
       setGender(e.target.value)
   }

   let handlefNameChange=(e)=>{
       setfName(e.target.value)
   }
   let handleSubmit=(e)=>{
    e.preventDefault();
    setTitle({name:name,gender:gender,friend:fname});       
   }
    return (
        <ModalWrap onSubmit={handleSubmit} show={show}>
            <Modalhead>
                <h2>To Personalize your book fill the details.</h2>
                <ModalClosebtn onClick={closeModal}>x</ModalClosebtn>
            </Modalhead>
            <ModalContent>
                <Label>Name</Label>
                <Input type="text" name="name" value={name} onChange={handleName} placeholder="Enter character's name"></Input>
                <Label>Gender</Label>
                <Input type="text" name="gender" value={gender} onChange={handleGender} placeholder="Male/Female"></Input>
                <Label>Friend/Sibiling's Name</Label>
                <Input type="text" name="friendName" value={fname} onChange={handlefNameChange} placeholder="Enter side character's name"></Input>
                <CloseBtn type="submit" onClick={closeModal}>View book</CloseBtn>
            </ModalContent>
        </ModalWrap>
    )
}

export default Personalize