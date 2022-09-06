import React, {useState, useRef, useEffect} from "react";
import styled from "styled-components";
import {motion, AnimatePresence} from 'framer-motion';
import ArrowBullet from "../../images/ArrowBullet";
import ProjectContent2 from "./ProjectContent2";
import {wrap} from 'popmotion';
import './Project2.css';

const ProjectContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 4rem;
position: relative;
`
const arrowSize = '50px'

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


const Project2 = ({projectInfo}) => {
    const [[page, direction], setPage] = useState([0,0]);
    const ref = useRef();

    const projectIndex = wrap(0, projectInfo.length, page);

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    }

    let divHeight = 0;

    useEffect(() => {
        let cancelled = false;
        const getHeight = () => {
            const {current} = ref;
            if (!current || !current.clientHeight) {
                if (!cancelled) {
                    requestAnimationFrame(getHeight);
                }
            } else {
                console.log(current.clientHeight);
                divHeight = current.clientHeight;
            }
        }
        getHeight();
        return () => {
            cancelled = true;
        }
    }, [])

    // console.log(divHeight);

    return (
        <ProjectContainer className='projects'>
            <ArrowBullet style={arrowStyle} className='left-arrow' onClick={() => paginate(-1)}/>
            <div className='animate-container' style={{width: '100%', position: 'relative', overflow: 'hidden', display: 'flex'}}>
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div 
                    ref={ref}
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
                        <ProjectContent2 content={projectInfo[projectIndex]}/>
                    </motion.div>
                </AnimatePresence>
            </div>
            <ArrowBullet style={arrowStyle} className='right-arrow' onClick={() => paginate(1)}/>
        </ProjectContainer>
    )
}

export default Project2;
