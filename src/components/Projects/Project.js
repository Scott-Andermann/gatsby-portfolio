import React, {useState} from 'react';
import styled from 'styled-components';
import ArrowBullet from '../../images/ArrowBullet';
import ProjectContent from './ProjectContent';
import './Project.css';
import { AnimatePresence, motion } from 'framer-motion';
import {wrap} from 'popmotion';

const arrowSize = '50px'

const ProjectContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
height: 50vh;
position: relative;
overflow: hidden;
`

const arrowStyle = {
    height: arrowSize,
    width: arrowSize,
    fill: '#00d3a2',
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };
  


const Project = ({projectInfo}) => {

    const [[page, direction], setPage] = useState([0,0]);

    const projectIndex = wrap(0, projectInfo.length, page);

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    }
    return (
        <ProjectContainer>
            <ArrowBullet style={arrowStyle} className='left-arrow' onClick={() => paginate(-1)}/>
            <div style={{width: '100%', height: '100%', position: 'relative'}}>
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div 
                    className='animate'
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                        paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                        paginate(-1);
                        }
                    }}>
                        
                        <ProjectContent content={projectInfo[projectIndex]}/>

                    </motion.div>
                </AnimatePresence>
            </div>
            <ArrowBullet style={arrowStyle} className='right-arrow' onClick={() => paginate(1)}/>
        </ProjectContainer>
    )
};

export default Project;