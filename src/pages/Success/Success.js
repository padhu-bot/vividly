import React from 'react';
import {
    ModalWrap,
    Modalhead,
    ModalClosebtn,
    ModalContent,
    ModalBody,
    ModalFooter,
    CloseBtn
} from './Success.elements';
const Success= ({show,closeModal}) => {
    return (
        <ModalWrap show={show}>
            <Modalhead>
                <h2>Thank you for Shopping with us!</h2>
                <ModalClosebtn onClick={closeModal}>x</ModalClosebtn>
            </Modalhead>
            <ModalContent>
                <ModalBody>
                Order has been placed successfully. Our team will soon contact you through email for payment process.  
                </ModalBody>
                <ModalFooter>
                <CloseBtn onClick={closeModal}>Close</CloseBtn>
                </ModalFooter>
            </ModalContent>
        </ModalWrap>
    )
}

export default Success
