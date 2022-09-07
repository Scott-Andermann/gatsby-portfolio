import React from "react";
import styled from "styled-components";
import FadeIn from "../Animations/FadeIn";
import { HeadingContainer, NumberSpan, Heading } from "../About/About";

const FooterContainer = styled.section`
height: 35vh;
width: 100%;
position: relative;
color: white;
`

const Footer = () => {
    return (
        <FadeIn>
            <FooterContainer>
                <HeadingContainer>
                    <Heading><NumberSpan>04. </NumberSpan>Let's Connect!</Heading>
                </HeadingContainer>

            </FooterContainer>
        </FadeIn>
    )
}

export default Footer;