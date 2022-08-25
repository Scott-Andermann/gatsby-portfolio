import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
height: 75vh;
width: 100%;
color: #F2F2F2;
`

export const NumberSpan = styled.span`
font-size: 1.25rem;
font-weight: normal;
color: #00d3a2;
`

export const HeadingContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 4rem;
&:after {
    content: "";
    display: block;
    border-bottom: 1px solid #F2F2F2;
    width: 400px;
    color: white;
}
`

export const Heading = styled.h2`
color: #F2F2F2;
margin-right: 2rem;
`

const Paragraph = styled.p`
line-height: 1.75rem;
width: 600px;
`

const About = () => {

    return (
        <AboutContainer>
            <HeadingContainer>
                <Heading><NumberSpan>01. </NumberSpan>About Me</Heading>
            </HeadingContainer>
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paragraph>
        </AboutContainer>
    )
};

export default About;