import React from "react";
import styled from "styled-components";
import FadeIn from "../Animations/FadeIn";
import JobCard from "./JobCard";
import { workInfo } from "./workInfo";
import { HeadingContainer, NumberSpan, Heading } from '../About/About';

const ContainerDiv = styled.section`
min-height: 10vh;
width: 100%;
color: white;
position: relative;
`


const Work = () => {

  return (
    <FadeIn>
      <ContainerDiv id='container'>
        <HeadingContainer>
          <Heading><NumberSpan>03. </NumberSpan>Where I've Worked</Heading>
        </HeadingContainer>
        {workInfo.length > 0 && workInfo.map(job => <JobCard key={job.id} job={job}/>)}
        <div style={{height: '1rem'}} />
      </ContainerDiv>
    </FadeIn>
  )
};

export default Work;
