import React from 'react';
import styled from 'styled-components';
import Project2 from './Project2';
import Project from './Project';
import { HeadingContainer, NumberSpan, Heading } from '../About/About';
import { projectInfo } from './projectInfo';

const ContainerDiv = styled.section`
min-height: 10vh;
width: 100%;
color: white;
`

const Projects = () => {

    return (
        <ContainerDiv>
            <HeadingContainer>
                <Heading><NumberSpan>02. </NumberSpan>Things I have built</Heading>
            </HeadingContainer>            
            <Project2 projectInfo={projectInfo}/>
            {/* Add cards of smaller projects */}
        </ContainerDiv>
    )
};

export default Projects;