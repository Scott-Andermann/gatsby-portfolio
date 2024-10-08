import * as React from 'react';
import './Intro.css';
import { motion } from 'framer-motion';

const Intro = ({ toggleModal }) => {
    return (
        <div className='intro'>
            {/* <MainHeading text='Hello there!' /> */}
            <div>
                <div>
                    <motion.p className='greeting'
                        initial={{
                            y: -100,
                            opacity: 0
                        }}
                        animate={{
                            y: 0,
                            opacity: 1
                        }}
                        transition={{
                            duration: 0.4,
                            type: 'ease',
                            delay: 0
                        }}>Hi, my name is</motion.p>
                    <motion.h1 className='main-name'
                        initial={{
                            x: -100,
                            opacity: 0
                        }}
                        animate={{
                            x: 0,
                            opacity: 1
                        }}
                        transition={{
                            duration: 0.4,
                            type: 'ease',
                            delay: 0.4
                        }}>Scott Andermann</motion.h1>
                    <motion.h2 className='introduction-text'
                        initial={{
                            x: -100,
                            opacity: 0
                        }}
                        animate={{
                            x: 0,
                            opacity: 1
                        }}
                        transition={{
                            duration: 0.4,
                            type: 'ease',
                            delay: 0.8
                        }}>I love building new things on the web and fixing old things in the real world</motion.h2>
                    <motion.p className='descriptor'
                        initial={{
                            y: 100,
                            opacity: 0
                        }}
                        animate={{
                            y: 0,
                            opacity: 1
                        }}
                        transition={{
                            duration: 0.4,
                            type: 'ease',
                            delay: 1.2
                        }}>I am a <span className='orange-highlight'>Software Engineer</span> specializing in modern technologies like Javascript and Python with years of experience as a <span className='green-highlight'>Product Manager</span> and <span className='green-highlight'>Mechanical Engineer</span></motion.p>
                    <motion.button className='contact-button' onClick={toggleModal}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{
                        duration: 0.4,
                        type: 'ease',
                        delay: 1.6
                    }}>
                        <h3 className='contact-button-text'>Give me a shout</h3>
                    </motion.button>
                </div>
            </div>

        </div>
    )
}

export default Intro;