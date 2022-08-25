import React from 'react';
import styled from 'styled-components';
import ArrowBullet from '../../images/ArrowBullet';
import Content from './Content';
import './Project.css';

const ProjectContainer = styled.div`
display: flex;
align-items: center;
justify-content: left;
width: 100%;
height: 50vh;
position: relative;
`

const arrowStyle = {
    height: '40px',
    width: '40px',
    fill: '#00d3a2',
}

const Project = ({content}) => {

    return (
        <ProjectContainer>
            <ArrowBullet style={arrowStyle} className='left-arrow'/>
                <Content content={content}/>
            <ArrowBullet style={arrowStyle} className='right-arrow'/>
        </ProjectContainer>
    )
};

export default Project;