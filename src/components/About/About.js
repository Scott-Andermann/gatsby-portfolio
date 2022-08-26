import React from 'react';
import styled from 'styled-components';
import ArrowBullet from '../../images/ArrowBullet';
import './About.css';

const AboutContainer = styled.section`
height: 75vh;
width: 100%;
position: relative;
color: white;
`

export const NumberSpan = styled.span`
font-size: 1rem;
font-weight: normal;
color: #00d3a2;
margin-right: 1.5rem;
`

export const HeadingContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 4rem;
max-width: 50vw;
&:after {
    content: "";
    display: block;
    border-bottom: 1px solid #F2F2F2;
    width: 100%;
    color: white;
    max-width: 100%;
    min-width: 20px;
}
`

export const Heading = styled.h2`
color: #F2F2F2;
margin-right: 2rem;
white-space: nowrap;
`

const Paragraph = styled.p`
line-height: 1.75rem;
opacity: 0.6;
width: 600px;
margin-bottom: 2rem;
`

const SkillsList = styled.ul`
columns: 2;
width: 50%;
`

const SkillElement = styled.li`
display: flex;
align-items: center;
line-height: 1.75rem;
opacity: 0.6;
`

const arrowStyle = {
    height: '20px',
    width: '20px',
    fill: '#FF6639'
}

const About = () => {

    return (
        <AboutContainer className='about'>
            <HeadingContainer>
                <Heading><NumberSpan>01. </NumberSpan>About Me</Heading>
            </HeadingContainer>
            <Paragraph>Hi! My name is Scott and I enjoy building all types of things.</Paragraph>
            <Paragraph>Some of the technologies I have been working with recently: </Paragraph>
            <SkillsList>
                
                <SkillElement><ArrowBullet style={arrowStyle}></ArrowBullet>JavaScript (ES6+)</SkillElement>
                <SkillElement><ArrowBullet style={arrowStyle}></ArrowBullet>Python</SkillElement>
                <SkillElement><ArrowBullet style={arrowStyle}></ArrowBullet>HTML/CSS</SkillElement>
                <SkillElement><ArrowBullet style={arrowStyle}></ArrowBullet>React/Redux</SkillElement>
                <SkillElement><ArrowBullet style={arrowStyle}></ArrowBullet>Node.js</SkillElement>
                <SkillElement><ArrowBullet style={arrowStyle}></ArrowBullet>TypeScript</SkillElement>
            </SkillsList>
        </AboutContainer>
    )
};

export default About;