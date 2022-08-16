import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0%;
  left: 0;
`;
const StyledTitleNumber = styled.div`
  color: var(--teal);
  font-size: 2rem;
  margin-right: 10px;
`;

const StyledText = styled.h3`
  font-size: 3rem;
  margin: 0;
  line-height: initial;
`;

const SectionTitle = ({ text, number }) => {
  return (
    <StyledContainer>
      <StyledTitleNumber>{number}</StyledTitleNumber>
      <StyledText>{text}</StyledText>
    </StyledContainer>
  );
};

export default SectionTitle;
