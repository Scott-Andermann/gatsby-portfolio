import React from 'react';
import styled from 'styled-components';

const Rotate = styled.p`
writing-mode: vertical-rl;
margin: 32px 0;
color: #F2F2F2;
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
    height: 25vh;
    color: white;
}`

const RightOverlay = () => {
  
  return (
    <RightDiv>
        <Rotate><a href="mailto:scottandermann@gmail.com" style={{color: '#F2F2F2'}}>ScottAndermann@gmail</a></Rotate>
    </RightDiv>
  )
};

export default RightOverlay;