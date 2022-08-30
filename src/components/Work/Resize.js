import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { HeadingContainer, NumberSpan, Heading } from "../About/About";
import { workInfo } from "./workInfo";
import { motion, AnimatePresence } from "framer-motion";
import Hexagon from "./Hexagon";

const WorkContainer = styled.section`
  height: 75vh;
  width: 100%;
  position: relative;
  color: white;
`;

const HexContainer = styled.div`
display: relative;
font-size: 0;
`

const UpperHex = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
width: 100%;
`

const LowerHex = styled.div`
display: flex;
justify-content: center;`

const JobList = styled.ul`
  list-style: none;
  display: inline-flex;
  justify-content: flex-start;
  width: 100%;
`;

const JobElement = styled.li`
  position: relative;
  width: 150px;
  height: 33px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px 5px 0 0;
  transition: background-image 1s;
  cursor: pointer;
  transition: background 1s;
`;

const JobDescription = styled.div`
  width: 100%;
  height: 100px;
  background-color: #104966;
  border-radius: 3px;
`;

const BackgroundDiv = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 0%;
  background: #104966;
  transition: height 0.5s;
  border-radius: 3px 3px 0 0;
`;

const jobs = ["WESSOL", "Husqvarna", "Yamaha", "Woodward"];

const scaleFactor = 0.33;

const Resize = () => {
  const [active, setActive] = useState(workInfo.length);
  const [size, setSize] = useState({height: 0, width: 0});
  const ref = useRef(null);

  useEffect(() => {
    setSize({width: ref.current.clientWidth * scaleFactor * 1.1547, height: ref.current.clientWidth * scaleFactor});
    // console.log(ref.current.clientWidth);

    function handleResize() {
      setSize({width: ref.current.clientWidth * scaleFactor * 1.1547, height: ref.current.clientWidth * scaleFactor});
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  })

  

  return (
    <WorkContainer ref={ref}>
      <HeadingContainer>
        <Heading>
          <NumberSpan>03. </NumberSpan>Professional Experience
        </Heading>
      </HeadingContainer>
      <HexContainer>
        <UpperHex>
          <Hexagon style={{height: `${size.height}px`, width: `${size.width}px`}} job={workInfo[0]}></Hexagon>
          <Hexagon style={{height: `${size.height}px`, width: `${size.width}px`}} job={workInfo[1]}></Hexagon>
        </UpperHex>
        <LowerHex style={{marginTop: `${-size.height / 2}px`}}>
          <Hexagon style={{height: `${size.height}px`, width: `${size.width}px`}} job={workInfo[2]}></Hexagon>
        </LowerHex>
      </HexContainer>
      {/* <JobList>
        {workInfo.length > 0 &&
          workInfo.map((job) => (
            <JobElement
              as={motion.li}
              // className={active === job.id ? 'active': ''}
              key={job.id}
              onClick={() => setActive(job.id)}
            >
              <BackgroundDiv
                style={
                  active === job.id ? { height: "100%" } : { height: "0%" }
                }
              ></BackgroundDiv>
              <div style={{ position: "relative" }}>
                <h3>{job.company}</h3>
              </div>
              {active === job.id ? (
                <motion.div
                  className="underline"
                  layoutId="underline"
                  transition={{ duration: 0.5 }}
                ></motion.div>
              ) : null}
            </JobElement>
          ))}
      </JobList>
      <JobDescription>
        <FilterJobs active={active} />
      </JobDescription> */}
    </WorkContainer>
  );
};

export default Resize;
