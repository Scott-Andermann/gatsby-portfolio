import React from "react";
import styled from "styled-components";
import { HeadingContainer, NumberSpan, Heading } from "../About/About";

const FooterContainer = styled.section`
height: 35vh;
width: 100%;
position: relative;
color: white;
`

const Footer = () => {
    return (
        <FooterContainer>
            <HeadingContainer>
                <Heading><NumberSpan>04. </NumberSpan>Let's Connect!</Heading>
            </HeadingContainer>

        </FooterContainer>
    )
}

export default Footer;