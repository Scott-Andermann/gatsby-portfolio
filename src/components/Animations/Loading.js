import React from 'react';
import styled from 'styled-components';
import ReactLoading from 'react-loading';
import * as colors from '../colors';

const MainDiv = styled.div`
height: 100vh;
width: 100vw;
background-color: ${colors.backgroundColor};
position: fixed;
display: flex;
justify-content: center;
align-items: center;
`

const Loading = () => {
    return (
        <MainDiv>
            <ReactLoading type='bars' color={`${colors.accentColor1}`} />
        </MainDiv>
    )
}

export default Loading;