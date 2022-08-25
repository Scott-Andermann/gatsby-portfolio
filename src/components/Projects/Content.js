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
    align-items: center;`

    
const OverlayDiv = styled.div`
position: absolute;
display: flex;
flex-direction: column;
justify-content: space-between;
right: 0;
top: 0;
height: 100%;
width: 30vw;
`

const DescriptorDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: right;
background-color: #104966;
height: 40%;
text-align: right;
border-radius: 3px;
padding: 1rem;
`

const ProjectTitle = styled.h3`
color: #F2F2F2;
margin: 0.5rem;
`

const ProjectDescription = styled.p`
line-height: 1.5rem;
`

const ProjectImg = styled.img`
height: 40vh;
width: auto;
border-radius: 3px;`

const toolsList = ['Python', 'Plotly', 'ShopifyAPI']

const Content = ({content}) => {

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
        }
    }


    return (
        <ContentContainer>
            <ProjectImg src={src(content.src)} />
            <OverlayDiv>
                <DescriptorDiv>
                    <ProjectTitle>{content.name}</ProjectTitle>
                    <ProjectDescription>{content.description}</ProjectDescription>
                </DescriptorDiv>
                <Tools toolsList={content.tools}/>
            </OverlayDiv>
        </ContentContainer>
    )
}

export default Content;