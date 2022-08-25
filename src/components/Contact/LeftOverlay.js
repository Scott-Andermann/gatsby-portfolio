import React from 'react';
import styled from 'styled-components';
import github from '../../images/github65ccb8.png';
import email from '../../images/email.png';
import phone from '../../images/phone.png';
import linkedin from '../../images/linkedin.png';

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
    height: 37vh;
    color: white;
}
`;

const SocialIcon = styled.img`
height: 32px;
`;

const SocialElement = styled.li`
margin: 32px 0;
`;

const LeftOverlay = () => {
  
  return (
    <SocialList>
        <li><a href='https://github.com/Scott-Andermann'><SocialIcon src={github} alt='contact icon github' /></a></li>
        <SocialElement><a href='https://linkedin.com/in/Scott-Andermann'><SocialIcon src={linkedin} alt='contact icon linkedin' /></a></SocialElement>
    </SocialList>
  )
};

export default LeftOverlay;