import React from 'react';
import {Head,Content,Team,TeamWrapper,TeamContainer,TeamCard,TeamCardInfo,TeamCardImage,Name,Info} from './About.element';
const About= () => {
    return (
        <Team>
        <Head>About Us</Head>
        <Content>Vividly Written was created to bring life to stories and memories that were not photographed. We aim to create storybooks that are authentic and bring real stories of real people interlaced with educational and informative facts along with accurate cultural depiction that foster better understanding of diversity in kids. We believe that children should be able to learn about their parents, grandparents and great grandparents, because every person has a  story and deserves to be celebrated. </Content>
        <TeamWrapper>
                <Head>Our Team</Head>
          <TeamContainer>
              <TeamCard>
              <TeamCardInfo>
                <TeamCardImage src='vividly/images/P1.jpg' alt="person1"/>
                <Name>VIV<i>(Storyteller)</i></Name>
                <Info>Viv is a passionate storyteller and has always loved weaving tales. She started Vividly Written with the intention to bring out the untold stories behind every person. 
</Info>
              </TeamCardInfo>
            </TeamCard>        
            <TeamCard>
              <TeamCardInfo>
                <TeamCardImage src='vividly/images/P3.jpg' alt="person2"/>
                <Name>Athul<i>(Illustrator)</i></Name>
                <Info>Athul is a 22 years old graduate in Chemical engineering with a fascination towards art and literature. He has nourished his artistic skills on his own with slow and steady efforts. Art as of him is defined as something which is authentic, pleasing and yet makes people uneasy. He's also interested in philosophy, travel, football and poetry.  </Info>
              </TeamCardInfo>
            </TeamCard>        
            <TeamCard>
            <TeamCardInfo>
            <TeamCardImage src='vividly/images/P2.jpg' alt="person3"/>
            <Name>Natasha<i>(Design Head)</i></Name>
            <Info>
Natasha is a fine arts graduate from Stella Maris, Chennai and holds a post graduate diploma in graphic and web design with over 7 years of experience in the advertising field. She loves analysing and solving design problems. Ever since she learnt how to hold a pencil, art has been a part of her life and she enjoys experimenting with colours and forms. She loves food, photography, travel, binge-watching and online shopping.  </Info>
          </TeamCardInfo>            
          </TeamCard>       
          </TeamContainer>
          <TeamContainer>
            <br></br>
          <TeamCard>
              <TeamCardInfo>
                <TeamCardImage src='vividly/images/P4.jpg' alt="person4"/>
                <Name>Padmasri<i>(Web developer)</i></Name>
                <Info>Padmasri is a fresh grad who is passionate towards Computer Science. She designs and develops websites in her free time. She is highly interested in AI and Data Science.She also loves playing Basket Ball.</Info>
              </TeamCardInfo>
            </TeamCard>   
            <br></br> 
            </TeamContainer>    
        </TeamWrapper>
        </Team>
    )
}

export default About