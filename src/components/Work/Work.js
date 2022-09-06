import React, { useState } from "react";
import styled from "styled-components";
import { workInfo } from "./workInfo";
import { HeadingContainer, NumberSpan, Heading } from '../About/About';
import JobCard from "./JobCard";
import * as colors from '../colors';

const ContainerDiv = styled.section`
min-height: 10vh;
width: 100%;
color: white;
position: relative;
`


const Work = () => {
  const [active, setActive] = useState(workInfo.length);

  return (
    <ContainerDiv>
      <HeadingContainer>
        <Heading><NumberSpan>03. </NumberSpan>Where I've Worked</Heading>
      </HeadingContainer>
      {workInfo.length > 0 && workInfo.map(job => <JobCard job={job}/>)}
      <div style={{height: '1rem'}} />
    </ContainerDiv>
  )
};

export default Work;
