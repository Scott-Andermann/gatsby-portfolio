import React, {useState} from 'react';
import styled from 'styled-components';
import Project from './Project';
import {wrap} from 'popmotion';
import { HeadingContainer, NumberSpan, Heading } from '../About/About';
import { projectContent } from './projectContent';
import { AnimatePresence, motion } from 'framer-motion';

const ContainerDiv = styled.section`
height: 75vh;
width: 100%;
color: #F2F2F2;
`

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Projects = () => {

    return (
        <ContainerDiv>
            <HeadingContainer>
                <Heading><NumberSpan>02. </NumberSpan>Things I have been working on</Heading>
            </HeadingContainer>
            {/* Add slideshow of major projects */}
            
            <Project projectContent={projectContent}/>
            {/* Add cards of smaller projects */}
        </ContainerDiv>
    )
};

export default Projects;