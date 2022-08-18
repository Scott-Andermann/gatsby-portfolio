import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
`;

const StyledHeader = styled.h3`
  font-size: 2em;
  color: var(--teal);
  margin-bottom: 10px;
`;

const StyledTitle = styled.h3`
  color: white;
  font-size: 4em;
  margin-bottom: 10px;
`;

const StyledDescriptionContainer = styled.div`
  background-color: #2b5266;
  padding: 25px;
  text-align: right;
  font-size: 2em;
  width: 50%;
  box-shadow: 0 10px 30px -15px var(--navy);
  z-index: 2;
`;

const StyledTagsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  font-size: 2em;
  margin-top: 10px;
  p {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const StyledImage = styled.div`
  background-image: url(${({ src }) => src});
  position: absolute;
  background-size: fit;
background-repeat: no-repeat;
  left: 0;
  width: 700px;
  height: 100%;
`;

const Project = ({ title, image, description, tags, githubLink }) => {
  return (
    <StyledContainer>
      <StyledImage src={image} />
      <StyledHeader>Featured Project</StyledHeader>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescriptionContainer>{description}</StyledDescriptionContainer>
      <StyledTagsContainer>{tags && tags.map((tag) => <p>{tag}</p>)}</StyledTagsContainer>
    </StyledContainer>
  );
};

export default Project;
