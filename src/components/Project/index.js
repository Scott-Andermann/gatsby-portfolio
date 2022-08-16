import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledTitle = styled.h3`
  color: white;
`;

const StyledDescriptionContainer = styled.div`
  background-color: #2b5266;
  padding: 25px;
  text-align: right;
`;

const StyledTagsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Project = ({ title, image, description, tags, githubLink }) => {
  return (
    <StyledContainer>
      Featured Project
      <StyledTitle>{title}</StyledTitle>
      <StyledDescriptionContainer>{description}</StyledDescriptionContainer>
      <StyledTagsContainer>{tags}</StyledTagsContainer>
      
    </StyledContainer>
  );
};

export default Project;
