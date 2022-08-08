import * as React from 'react';
import './Intro.css';
import { motion } from 'framer-motion';
import MainHeading from './MainHeading';


const Intro = () => {
    return (
        <div className='intro'>
            {/* <MainHeading text='Hello there!' /> */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}>
                <h1 className='main-heading'>Hello there!</h1>
                <h2 className='heading-2'>I love building new things and fixing old things</h2>
                <p className='intro-text'>Hi, my name is Scott Andermann and I took the scenic to web development. I spent the early part of my career designing off road vehicles.
                From there I completed my MBA and transistioned into a Product Manager role for consumer goods.  I bring an endless curiosity to any new challenge
                and won't hesitate to jump into the unknown to find the solution to a problem.</p>
            </motion.div>


        </div>
    )
}

export default Intro;