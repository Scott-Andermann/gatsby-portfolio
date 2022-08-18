import React from 'react';
import SectionContainer from '../SectionContainer';
import styled from 'styled-components';
import SectionTitle from '../SectionTitle';
import Project from '../Project';

const StyledContainer = styled.div`
  width: 100%;
`;
const StyledText = styled.p`
  font-size: 2rem;
`;

const Projects = () => {
  return (
    <SectionContainer>
      <StyledContainer>
        <SectionTitle number="02." text="Things I've been working on" />
        <Project
          image="https://scotta.works/static/powermeter-3ad1e4918a27da53a775d42faa4e9a55.jpg"
          tags={['Javascript', 'React', 'Python']}
          title="Test Title"
          description="In magna consequat laboris velit sunt labore adipisicing velit fugiat consectetur officia occaecat aliquip.Officia ut non fugiat velit qui. Esse aliqua aute duis ad."
        />
      </StyledContainer>
    </SectionContainer>
  );
};

export default Projects;
