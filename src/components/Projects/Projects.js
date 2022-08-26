import React from 'react';
import styled from 'styled-components';
import Project from './Project';
import { HeadingContainer, NumberSpan, Heading } from '../About/About';
import { projectContent } from './projectInfo';

const ContainerDiv = styled.section`
height: 75vh;
width: 100%;
color: white;
`

const Projects = () => {

    return (
        <ContainerDiv>
            <HeadingContainer>
                <Heading><NumberSpan>02. </NumberSpan>Things I have been working on</Heading>
            </HeadingContainer>            
            <Project projectContent={projectContent}/>
            {/* Add cards of smaller projects */}
        </ContainerDiv>
    )
};

export default Projects;