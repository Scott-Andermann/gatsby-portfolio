import React from "react";
import styled from "styled-components";
import FadeIn from "../Animations/FadeIn";
import { HeadingContainer, NumberSpan, Heading } from "../About/About";
import ContactItem from "./ContactItem";


const FooterContainer = styled.section`
min-height: 10vh;
width: 100%;
position: relative;
color: white;
`

const ContactList = styled.ul`
display: flex;
list-style: none;
margin-left: -1rem;
@media (max-width: 900px){
    flex-direction: column;
}
`


const contactInfo = [
    {id: 1, type: 'Email', contact: 'ScottAndermann@gmail.com', link: 'mailto:scottandermann@gmail.com'},
    {id: 2, type: 'Phone', contact: '630.863.5072'},
    {id: 3, type: 'GitHub', contact: 'Scott-Andermann', link: 'https://github.com/Scott-Andermann'},
    {id: 4, type: 'LinkedIn', contact: 'Scott Andermann', link: 'https://www.linkedin.com/in/scott-andermann'},
];



const Footer = ({setIsShowing}) => {
    return (
        <FadeIn>
            <FooterContainer>
                <HeadingContainer>
                    <Heading><NumberSpan>04. </NumberSpan>Let's Connect!</Heading>
                </HeadingContainer>
                <div className='contact-button' onClick={() => setIsShowing(true)}>
                    <h3 className='contact-button-text'>Give me a shout</h3>
                </div>
                <div style={{height: '4rem'}}></div>
                <h4 style={{opacity: 0.8}}>Or get in touch using any of the following:</h4>
                <div style={{height: '2rem'}}></div>
                <footer>
                    <ContactList>
                        {contactInfo.length > 0 && contactInfo.map(element => <ContactItem key={element.id} element={element}/>)}
                    </ContactList>
                </footer>
            </FooterContainer>
        </FadeIn>
    )
}

export default Footer;