import React from 'react';
import styled from 'styled-components';
import Project from './Project';
import { HeadingContainer, NumberSpan, Heading } from '../About/About';
import { projectContent } from './projectContent';

const ContainerDiv = styled.section`
height: 75vh;
width: 100%;
color: #F2F2F2;
`

const Projects = () => {

    return (
        <ContainerDiv>
            <HeadingContainer>
                <Heading><NumberSpan>02. </NumberSpan>Things I have been working on</Heading>
            </HeadingContainer>
            {/* Add slideshow of major projects */}
            <Project content={projectContent[2]}/>
            {/* Add cards of smaller projects */}
        </ContainerDiv>
    )
};

export default Projects;