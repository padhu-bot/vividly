import React from 'react';
import {Head,Content,Wrap,Write} from './Contact.element';
const Contact= () => {
    return (
        <Wrap>
        <Head>Contact Us</Head>
        <Content>Do you have any questions? Do you have fancy ideas you like to give life to?We would love to hear from you ❤ ! Feel free to disscuss with us.</Content>
        <Write>Mail us at :<a href='mailto:vividlywritten@gmail.com'> vividlywritten@gmail.com</a></Write>
        <Write>Follow us at Instagram for latest updates :<a href='https://www.instagram.com/vividlywritten/'> Vividly Written</a></Write>
        </Wrap>
    )
}

export default Contact
