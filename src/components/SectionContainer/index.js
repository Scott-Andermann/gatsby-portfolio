import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  max-width: 900px;
  padding: 100px 0px;
  position: relative;
`;

const SectionContainer = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};

export default SectionContainer;
