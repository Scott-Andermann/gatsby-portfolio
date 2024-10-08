import React from "react";
import styled from "styled-components";
import Tools from "./Tools";
import warranty from '../../images/webp/warranty.webp'
import sentiment from '../../images/webp/sentiment.webp';
import stl from '../../images/png/stlcompressed.gif';
import guess from '../../images/webp/guess.webp';
import sprayer from '../../images/webp/sprayer.webp';
import ExternalIcon from "../../images/ExternalIcon";
import GithubIcon from "../../images/GithubIcon";

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
// width: 70%;
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

const ProjectHeading = styled.h2`
padding: 1rem 0;
`

const Description = styled.div`
opacity: 0.8;
@media (max-width: 600px) {
    display: none;
}
`

const ShortDescription = styled.div`
display: none;
opacity: 0.8;
@media (max-width: 600px) {
    display: block;
}`

const Links = styled.div`
opacity: 0.8;
display: flex;
justify-content: flex-end;
@media (max-width: 750px) {
    margin-left: -20px;
}
`
const Link = styled.a`
margin-left 20px;
`

const iconStyle = {
    height: '22px',
    width: '22px',
    fill: '#FFFFFF',
    fillOpacity: 0.8
}

const ProjectContent2 = ({content}) => {

    const src = () => {
        switch (content.src) {
            case 'warranty':
                return warranty;
            case 'sentiment':
                return sentiment;
            case 'stl':
                return stl;
            case 'guess':
                return guess;
            case 'sprayer':
                return sprayer;
            default:
                return <></>;
        }
    }

    return (
        <ContainerDiv>
            <ProjectImg src={src(content.src)} alt='basic visual of project'/>
            <DescriptorDiv className='project-descriptor'>
                <ProjectHeading>{content.name}</ProjectHeading>
                <Description>{content.description}</Description>
                <ShortDescription>{content.shortDescription}</ShortDescription>
                <Tools toolsList={content.tools} />
                <Links>
                    {content.github && <Link className='external-icon' href={content.github} target='_blank'><GithubIcon  style={iconStyle} /></Link>}
                    {content.link && <Link className='external-icon' href={content.link} target='_blank'><ExternalIcon  style={iconStyle} /></Link>}
                </Links>
            </DescriptorDiv>
        </ContainerDiv>
    )
}

export default ProjectContent2;