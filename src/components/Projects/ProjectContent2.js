import React from "react";
import styled from "styled-components";
import Tools from "./Tools";
import warranty from '../../images/warranty.png';
import flappyBird from '../../images/flappybird2.gif';
import powerMeter from '../../images/powermeter.jpg';
import weather from '../../images/weather.png';
import sentiment from '../../images/sentiment.png';
import stl from '../../images/stlcompressed.gif';

const ContainerDiv = styled.div`
height: 50vh;
position: relative;
@media (max-width: 400px) {
    height: 60vh;
}
`

const ProjectImg = styled.img`
position: absolute;
height: 70%;
left: 0;
bottom: 0px;
border-radius: 3px;
@media (max-width: 750px) {
    width: 100%;
    height: 100%;
}
`

const DescriptorDiv = styled.div`
position: absolute;
flex-direction: column;
justify-content: space-between;
width: 70%;
top: 0;
right: 0;
background-color: #104966;
padding: 1rem 1.5rem;
border-radius: 3px;
text-align: right;
@media (max-width: 750px) {
    text-align: left;
    width: 100%;
    height: 100%;
    opacity: 0.85;
    display: flex;
    align-items: center;
}`

const ProjectHeading = styled.h3`
padding: 1rem 0;
`

const Description = styled.div`
`

const ProjectContent2 = ({content}) => {

    const src = () => {
        switch (content.src) {
            case 'powerMeter':
                return powerMeter;
            case 'flappy':
                return flappyBird;
            case 'weather':
                return weather;
            case 'warranty':
                return warranty;
            case 'sentiment':
                return sentiment;
            case 'stl':
                return stl;
            default:
                return weather;
        }
    }

    return (
        <ContainerDiv>
            <ProjectImg src={src(content.src)} />
            <DescriptorDiv className='project-descriptor'>
                <ProjectHeading>{content.name}</ProjectHeading>
                <Description>{content.description}</Description>
                <Tools toolsList={content.tools} />
            </DescriptorDiv>
        </ContainerDiv>
    )
}

export default ProjectContent2;