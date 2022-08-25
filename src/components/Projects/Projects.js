import React from 'react';
import styled from 'styled-components';
import Project from './Project';
import { HeadingContainer, NumberSpan, Heading } from '../About/About';

const ContainerDiv = styled.div`
height: 75vh;
width: 100%;
color: #F2F2F2;
`

const Projects = () => {

    return (
        <ContainerDiv>
            <HeadingContainer>
                <Heading><NumberSpan>02. </NumberSpan>Featured Projects</Heading>
            </HeadingContainer>
            {/* Add slideshow of major projects */}
            <Project />
            {/* Add cards of smaller projects */}
        </ContainerDiv>
    )
};

export default Projects;