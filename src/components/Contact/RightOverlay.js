import React from 'react';
import styled from 'styled-components';

const Rotate = styled.p`
writing-mode: vertical-rl;
margin: 32px 0;
color: white;
text-decoration: none;
`

const RightDiv = styled.div`
bottom: 0;
display: flex;
flex-direction: column;
align-items: center;
&:after {
    content: "";
    display: block;
    border-left: 1px solid #F2F2F2;
    height: 20vh;
    color: white;
    opacity: 0.6;
}`

const RightOverlay = () => {
  
  return (
    <RightDiv>
        <Rotate><a href="mailto:scottandermann@gmail.com" style={{color: 'white', opacity: 0.6, textDecoration: 'none'}}>ScottAndermann@gmail</a></Rotate>
    </RightDiv>
  )
};

export default RightOverlay;