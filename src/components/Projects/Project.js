import React from 'react';
import styled from 'styled-components';
import flappyBird from '../../images/flappybird2.gif';
import warranty from '../../images/warranty.png';
import powerMeter from '../../images/powermeter.jpg';
import weather from '../../images/weather.png';
import sentiment from '../../images/sentiment.png';
import stl from '../../images/stlcompressed.gif';

const ProjectContainer = styled.div`
width: 100%;
position: relative;
`

const ProjectTitle = styled.h3`
color: #F2F2F2;
`

const ProjectDescription = styled.p`
`

const ProjectImg = styled.img`
height: 40vh;
width: auto;`

const OverlayDiv = styled.div`
position: absolute;
right: 0;
top: 20px;
height: 40vh;
width: 40vw;
border: 1px solid black;
`

const DescriptorDiv = styled.div`
background-color: #1779aa;
height: 60%;
`

const ToolsDiv = styled.div`
display: flex; 
justify-content: space-around;
width: 50%;
margin-left: 50%;
`

const Project = () => {

    return (
        <ProjectContainer>
            <ProjectImg src={warranty} />
            <OverlayDiv>
                <DescriptorDiv>
                    <ProjectTitle>Bespoke Warranty Dashboard</ProjectTitle>
                    <ProjectDescription>Built a Python based web-app to track warranty claim data in real time resulting in over a 50% reduction in warranty claims</ProjectDescription>
                </DescriptorDiv>
                <ToolsDiv>
                    <h4>Python</h4>
                    <h4>Plotly</h4>
                    <h4>ShopifyAPI</h4>
                </ToolsDiv>
            </OverlayDiv>
            {/* Title Image, description, tools */}
        </ProjectContainer>
    )
};

export default Project;