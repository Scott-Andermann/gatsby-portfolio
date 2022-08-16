import React from 'react';
import SectionContainer from '../SectionContainer';
import SectionTitle from '../SectionTitle';
import styled from 'styled-components';

const StyledContainer = styled.div``;
const StyledText = styled.p`
  font-size: 2rem;
`;

const About = () => {
  return (
    <SectionContainer>
      <StyledContainer>
        <SectionTitle number="01." text="About Me" />
        <StyledText>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea possimus, delectus quasi iure
          quaerat error sequi quas cum necessitatibus odit vel incidunt nobis deserunt harum
          aspernatur repellendus fugit est vitae!
          <br />
          <br />
          In magna consequat laboris velit sunt labore adipisicing velit fugiat consectetur officia occaecat aliquip.Officia ut non fugiat velit qui. Esse aliqua aute duis ad. Et dolor laboris pariatur nulla enim eiusmod id laboris aute magna in mollit dolore.
        </StyledText>
      </StyledContainer>
    </SectionContainer>
  );
};

export default About;
