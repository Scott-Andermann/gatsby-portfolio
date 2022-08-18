import React from 'react';
import SectionContainer from '../SectionContainer';
import SectionTitle from '../SectionTitle';
import styled from 'styled-components';

const StyledContainer = styled.div``;
const StyledText = styled.p`
  font-size: 2rem;
`;

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(200px, 260px));
  gap: 0px 10px;
  padding: 0px;
  margin: 20px 0px 0px;
  overflow: hidden;
  list-style: none;
  li {
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
    font-size: 2em;
    &:after {
      content: '▹';
      position: absolute;
      left: 0px;
      color: var(--teal);
    }
  }
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
          In magna consequat laboris velit sunt labore adipisicing velit fugiat consectetur officia
          occaecat aliquip.Officia ut non fugiat velit qui. Esse aliqua aute duis ad. Et dolor
          laboris pariatur nulla enim eiusmod id laboris aute magna in mollit dolore.
        </StyledText>
        <StyledText>Here are a few technologies I've been working with recently:</StyledText>
      </StyledContainer>
      <StyledList>
        <li>JavaScript (ES6+)</li>
        <li>React/Redux</li>
        <li>Python/Flask/Django</li>
        <li>Node.js</li>
        <li>HTML/CSS</li>
        <li>TypeScript</li>
      </StyledList>
    </SectionContainer>
  );
};

export default About;
