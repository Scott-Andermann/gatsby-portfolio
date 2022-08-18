import * as React from 'react';
import './Intro.css';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledContainer = styled.div`
  background-position: bottom;
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 985px) {
    padding: 25px;
  }
`;

const StyledTextContainer = styled(motion.div)`
  max-width: 900px;
  @media only screen and (max-width: 985px) {
    max-width: 100%;
  }
`;

const StyledSmallText = styled(motion.h5)`
  font-size: 2.2em;
  color: #64ffda;
  font-weight: normal;
  font-family: 'Robot Mono', sans-serif;
`;

const StyledName = styled(motion.h2)`
  color: #f2f2f2;
  font-size: clamp(40px, 8vw, 80px);
`;

const StyledSubHeading = styled(StyledName)`
  color: rgba(255, 255, 255, 0.6);
  font-size: 5em;
  line-height: 0.9;
  margin-bottom: .5em;
`;
const StyledDescription = styled(motion.p)`
  color: rgba(255, 255, 255, 0.6);
  font-size: 2.4em;
`;

const StyledButton = styled(motion.button)`
  color: var(--teal);
  background-color: transparent;
  border: 1px solid var(--teal);
  border-radius: 4px;
  padding: 1.25em 1.75em;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  margin-top: 50px;
  font-size: 2.4em;
`;
const Intro = () => {
  return (
    <StyledContainer>
      <StyledTextContainer transition={{ staggerChildren: 0.5 }}>
        {/* <MainHeading text='Hello there!' /> */}
        <StyledSmallText
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, my name is
        </StyledSmallText>
        <StyledName
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Scott Andermann.
        </StyledName>
        <StyledSubHeading
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          I love building new things on the web, and fixing old things in the real world.
        </StyledSubHeading>
        <StyledDescription
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          I'm a <span className="text-highlight">Software Engineer</span> specializing in modern
          technologies like Javascript and Python, with years of experience as a{' '}
          <span className="text-highlight">Product Manager</span> and{' '}
          <span className="text-highlight">Mechanical Engineer</span>.
        </StyledDescription>
        <StyledButton
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          Give me a shout!
        </StyledButton>
      </StyledTextContainer>
    </StyledContainer>
  );
};

export default Intro;
