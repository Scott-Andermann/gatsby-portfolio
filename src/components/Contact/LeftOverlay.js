import React from 'react';
import styled from 'styled-components';
import EmailIcon from '../../images/EmailIcon';
import GithubIcon from '../../images/GithubIcon';
import LinkedinIcon from '../../images/LinkedinIcon';
import * as colors from '../colors';

const SocialList = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
align-items: center;
bottom: 0;
&:after {
    content: "";
    display: block;
    border-left: 1px solid #F2F2F2;
    height: 22vh;
    color: white;
    opacity: 0.6;
}
`;

const SocialElement = styled.li`
margin: 16px 0;
`;

const iconStyle = {
  height: '32px',
  width: '32px',
  fill: `${colors.accentColor1}ad`
}

const LeftOverlay = () => {
  
  return (
    <SocialList>
        <SocialElement><a href='https://github.com/Scott-Andermann' target="_blank" rel='noreferrer'><GithubIcon style={iconStyle}/></a></SocialElement>
        <SocialElement><a href='https://linkedin.com/in/Scott-Andermann' target="_blank" rel='noreferrer'><LinkedinIcon style={iconStyle}/></a></SocialElement>
        <SocialElement><a href='mailto:scottandermann@gmail.com'><EmailIcon style={iconStyle}/></a></SocialElement>
    </SocialList>
  )
};

export default LeftOverlay;