import React from 'react';
import styled from 'styled-components';
import github from '../../images/github65ccb8.png';
import linkedin from '../../images/linkedin.png';

const StyledContainer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  padding: 0 75px;
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 190px;
    margin: 0px auto;
    background-color: grey;
  }
`;

const StyledEmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 190px;
    margin: 0px auto;
    background-color: grey;
  }
`;

const StyledEmail = styled.a`
  margin: 20px auto;
  padding: 10px;
  letter-spacing: 0.1em;
  -webkit-writing-mode: vertical-rl;
  writing-mode: vertical-rl;
`;

const Footer = () => {
  return (
    <StyledContainer>
      <SocialContainer>
        <a href="https://github.com/Scott-Andermann">
          <img className="contact-icon" src={github} />
        </a>
        <a href="https://www.linkedin.com/in/scott-andermann">
          <img className="contact-icon" src={linkedin} />
        </a>
      </SocialContainer>
      <StyledEmailContainer>
        <StyledEmail href="mailto:scottandermann@gmail.com">scottandermann@gmail.com</StyledEmail>
      </StyledEmailContainer>
    </StyledContainer>
  );
};

{
  /* <ul className="contact-list">
  <li className="icon-wrapper">
    <h3 className="contact-text">Hit me up:</h3>
  </li>
  <li className="icon-wrapper email" onClick={contactForm}>
    <img className="contact-icon" src={email} /> ScottAndermann@gmail.com
  </li>
  <li className="icon-wrapper phone">
    <img className="contact-icon" src={phone} /> 630.863.5072
  </li>
  <li className="icon-wrapper">
    <a href="https://github.com/Scott-Andermann">
      <img className="contact-icon" src={github} /> Scott-Andermann
    </a>
  </li>
  <li className="icon-wrapper">
    <a href="https://www.linkedin.com/in/scott-andermann">
      <img className="contact-icon" src={linkedin} /> ScottAndermann
    </a>
  </li>
</ul>; */
}

export default Footer;
