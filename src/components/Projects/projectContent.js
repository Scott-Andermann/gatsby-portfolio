import React from 'react';
import styled from 'styled-components';
import Tools from './Tools';
import warranty from '../../images/warranty.png';
import flappyBird from '../../images/flappybird2.gif';
import powerMeter from '../../images/powermeter.jpg';
import weather from '../../images/weather.png';
import sentiment from '../../images/sentiment.png';
import stl from '../../images/stlcompressed.gif';



const ContentContainer = styled.div`
position: relative;
width: 100%;
height: 100%;
display: flex;
justify-content: left;
align-items: center;
`

    
const OverlayDiv = styled.div`
position: absolute;
display: flex;
flex-direction: column;
justify-content: flex-start;
right: 0;
top: 0;
height: 100%;
width: 50%;
@media (max-width: 1024px) {
    width: 100%;
    height: 100%;
    opacity: 0.85;
}
`

const DescriptorDiv = styled.div`
display: flex;
flex-direction: column;
background-color: #104966;
text-align: right;
border-radius: 3px;
padding: 1.5rem;
@media (max-width: 1024px) {
    height: 100%;
    width: 91%;
    margin: auto;
    text-align: left;
    justify-content: space-around;
}
`

const ProjectTitle = styled.h3`
color: #F2F2F2;
margin-bottom: 1rem;
`

const ProjectDescription = styled.p`
line-height: 1.5rem;
opacity: 0.85;
`

const ProjectImg = styled.img`
height: 40vh;
width: 60%;
border-radius: 3px;
@media (max-width: 1024px) {
    margin: auto;
}
`

const ProjectContent = ({content}) => {

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
        <ContentContainer>
            
            <OverlayDiv>
                <DescriptorDiv>
                    <ProjectTitle>{content.name}</ProjectTitle>
                    <ProjectDescription>{content.description}</ProjectDescription>
                    <Tools toolsList={content.tools} className='tablet'/>
                </DescriptorDiv>
                <Tools toolsList={content.tools} className='desktop'/>
            </OverlayDiv>
        </ContentContainer>
    )
}

export default ProjectContent;