import React, {useEffect} from 'react';
import styled from 'styled-components';
import ReactLoading from 'react-loading';
import * as colors from '../colors';
import './Animations.css';



const MainDiv = styled.div`
height: 100vh;
width: 100vw;
background-color: ${colors.backgroundColor};
position: fixed;
display: flex;
justify-content: center;
align-items: center;
`

const LoadingDiv = styled.div`
opacity: 0;
animation: ${props => props.isLoading ? "fadeIn" : "fadeOut"} 1.2s;
`

const Loading = ({isLoading, setRender, render}) => {

    useEffect(() => {
        if (isLoading) setRender(true);
      }, [isLoading, setRender]);

    const onAnimationEnd = () => {
        if (!isLoading) setRender(false);
    }

    console.log(isLoading);

    return (
        render && <MainDiv>
            <LoadingDiv
                onAnimationEnd={onAnimationEnd}
                isLoading={isLoading}>
                <ReactLoading type='bars' color={`${colors.accentColor1}`} />
            </LoadingDiv>
        </MainDiv>
    )
}

export default Loading;

