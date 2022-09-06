import React from "react";
import styled from "styled-components";
import { workInfo } from "./workInfo";
import { HeadingContainer, NumberSpan, Heading } from '../About/About';
import JobCard from "./JobCard";

const ContainerDiv = styled.section`
min-height: 10vh;
width: 100%;
color: white;
position: relative;
`


const Work = () => {

  return (
    <ContainerDiv id='container'>
      <HeadingContainer>
        <Heading><NumberSpan>03. </NumberSpan>Where I've Worked</Heading>
      </HeadingContainer>
      {workInfo.length > 0 && workInfo.map(job => <JobCard key={job.id} job={job}/>)}
      <div style={{height: '1rem'}} />
    </ContainerDiv>
  )
};

export default Work;
