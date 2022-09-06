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
@media (max-width: 500px) {
    margin-right: 0;
}
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
font-size: clamp(10px, 2vw, 30px)
color: #F2F2F2;
margin-right: 2rem;
white-space: nowrap;
`

const Paragraph = styled.p`
line-height: 1.75rem;
opacity: 0.6;
width: 100%;
margin-bottom: 2rem;
`

const SkillsList = styled.ul`
columns: 2;
width: 50%;
@media (max-width: 700px) {
    width: 100%;
}
`

const SkillElement = styled.li`
display: flex;
align-items: center;
line-height: 1.75rem;

`

const TextSpan = styled.span`
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
                
                <SkillElement><ArrowBullet style={arrowStyle}></ArrowBullet><TextSpan>JavaScript (ES6+)</TextSpan></SkillElement>
                <SkillElement><ArrowBullet style={arrowStyle}></ArrowBullet><TextSpan>Python</TextSpan></SkillElement>
                <SkillElement><ArrowBullet style={arrowStyle}></ArrowBullet><TextSpan>HTML/CSS</TextSpan></SkillElement>
                <SkillElement><ArrowBullet style={arrowStyle}></ArrowBullet><TextSpan>React/Redux</TextSpan></SkillElement>
                <SkillElement><ArrowBullet style={arrowStyle}></ArrowBullet><TextSpan>Node.js</TextSpan></SkillElement>
                <SkillElement><ArrowBullet style={arrowStyle}></ArrowBullet><TextSpan>TypeScript</TextSpan></SkillElement>
            </SkillsList>
        </AboutContainer>
    )
};

export default About;