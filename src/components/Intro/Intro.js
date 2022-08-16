import * as React from 'react';
import './Intro.css';
import { motion } from 'framer-motion';
import styled from 'styled-components';



const Intro = () => {
  return (
    <div className="intro">
      <motion.div transition={{ staggerChildren: 0.5 }} className="intro-container">
        {/* <MainHeading text='Hello there!' /> */}
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="main-heading code-text"
        >
          Hi, my name is
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          className="heading-2"
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Scott Andermann.
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          className="heading-2 sub-heading"
          transition={{ duration: 0.5, delay: 1 }}
        >
          I love building new things on the web, and fixing old things in the real world.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="intro-text"
        >
          I'm a <span className="text-highlight">Software Engineer</span> specializing in modern
          technologies like Javascript and Python, with years of experience as a{' '}
          <span className="text-highlight">Product Manager</span> and{' '}
          <span className="text-highlight">Mechanical Engineer</span>.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Intro;
