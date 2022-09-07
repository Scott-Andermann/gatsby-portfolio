import React from 'react';
import styled from 'styled-components';
import FadeIn from '../Animations/FadeIn';
import Project2 from './Project2';
import { HeadingContainer, NumberSpan, Heading } from '../About/About';
import { projectInfo } from './projectInfo';

const ContainerDiv = styled.section`
min-height: 10vh;
width: 100%;
color: white;
`

const Projects = () => {

    return (
        <FadeIn>
            <ContainerDiv>
                <HeadingContainer>
                    <Heading><NumberSpan>02. </NumberSpan>Things I've built</Heading>
                </HeadingContainer>            
                <Project2 projectInfo={projectInfo}/>
                {/* Add cards of smaller projects */}
            </ContainerDiv>
        </FadeIn>
    )
};

export default Projects;