import * as React from 'react';
import './Intro.css';
import { motion } from 'framer-motion';

//I love building new things on the web and fixing old things in the real world
//I'm a software engineer specializing in modern technologies like Javascript and Python, with years of experience
//as a mechanical engineer and produc manager
const Intro = ({ setIsShowing }) => {
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
                            duration: 0.5,
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
                            duration: 0.5,
                            type: 'ease',
                            delay: 0.5
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
                            duration: 0.5,
                            type: 'ease',
                            delay: 1
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
                            duration: 0.5,
                            type: 'ease',
                            delay: 1.5
                        }}>I am a <span className='orange-highlight'>Software Engineer</span> specializing in modern technologies like Javascript and Python with years of experience as a <span className='green-highlight'>Product Manager</span> and <span className='green-highlight'>Mechanical Engineer</span></motion.p>
                    <div className='contact-button' onClick={() => setIsShowing(true)}>
                        <h3 className='contact-button-text'>Give me a shout</h3>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Intro;