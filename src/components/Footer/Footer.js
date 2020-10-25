import React from 'react'
import {FaFacebook,FaInstagram} from 'react-icons/fa';
import {
    FooterContainer,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterTitle,
    FooterLink,
    SocialMedia,
    SocialIcons,
    SocialIconLink,
    SocialMediaWrapper} from './Footer.elements'
const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterTitle>VIVIDLY WRITTEN</FooterTitle>
                        <FooterLink to='/About'>Our story</FooterLink>
                        <FooterLink to='/Contact'>Contact</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterTitle>SHOP WITH US</FooterTitle>
                        <FooterLink to='/bestsellers'>Bestsellers</FooterLink>
                        <FooterLink to='/childrenbook'>Chilren books</FooterLink>
                        <FooterLink to='/adultSection'>Adult section</FooterLink>
                        <FooterLink to='/'>Personalize Book</FooterLink>
                        <FooterLink to='/corporate'>Corporate</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterTitle>HELP AND SUPPORT</FooterTitle>
                        <FooterLink to='/FAQ'>FAQ</FooterLink>
                        <FooterLink to="/Contact">Call us</FooterLink>
                        <FooterLink to='/Terms'>Terms and conditions</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrapper>
                    <SocialIcons>
                        <SocialIconLink href='mailto:vividlywritten@gmail.com' target="_blank" aria-label="Facebook">
                            <FaFacebook></FaFacebook>
                        </SocialIconLink>
                        <SocialIconLink href='https://www.instagram.com/vividlywritten/' target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrapper>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
