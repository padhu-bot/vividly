import React from 'react';
import {Content,Wrap,Input,Label,Head} from './FAQ.elements';
const Faq= () => {
    return (
        <Wrap>
            <Head>FAQ</Head>
            <div>
                <Input type="radio" name="question" id="section1"></Input>
                <Label for="section1"> How do I order a personalised copy ?</Label>
                <Content> If you like any of the story books on the website, you can place an order online and mention your child's name and gender, your address and contact details. We will personalise the chosen book and send it to you. </Content>
            </div>
            <div>
                <Input type="radio" name="question" id="section2"></Input>
                <Label for="section2"> How can I make my own story ?</Label>
                <Content>Please write to us at vividlywritten@gmail.com or contact us on instagram @vividlywritten and give us the topic that interests your child and we will make the book for you on that particular topic, we will continue to keep in touch with you and get your approval at every step. </Content>
            </div>
            <div>
                <Input type="radio" name="question" id="section3"></Input>
                <Label for="section3"> My child has written a story, can I make a storybook out of it ?</Label>
                <Content>Please write to us at <a href='mailto:vividlywritten@gmail.com' >vividlywritten@gmail.com </a>or contact us on instagram <a href='https://www.instagram.com/vividlywritten/'> @vividlywritten </a> and give us the topic that interests your child and we will make the book for you on that particular topic, we will continue to keep in touch with you and get your approval at every step.</Content>
            </div>
            <div>
                <Input type="radio" name="question" id="section4"></Input>
                <Label for="section4"> What are the countries you deliver to ?</Label>
                <Content>We are open to deliver to all places and the shipping charge may vary based on your country. </Content>
            </div>
        </Wrap>
    )
}

export default Faq