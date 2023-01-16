import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import LeftOverlay from './LeftOverlay';
import RightOverlay from './RightOverlay';

const OverlayDiv = styled.div`
position: fixed;
width: 100vw;
height: 100vh;
display: flex;
justify-content: space-between;
pointer-events: none;
@media (max-width: 1023px) {
    display: none;
}
`

const MarginOverlay = styled.div`
width: 100%;
margin: 0 5vw;
display: flex;
align-items: end;
justify-content: space-between;
pointer-events: all;
`

const ContactOverlay = () => {

    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{
            duration: 0.5,
            type: 'ease',
            delay: 1.6
        }}>
            <OverlayDiv>
                <MarginOverlay>
                    <LeftOverlay />
                    <RightOverlay />
                </MarginOverlay>
            </OverlayDiv>

        </motion.div>

    )
};

export default ContactOverlay;