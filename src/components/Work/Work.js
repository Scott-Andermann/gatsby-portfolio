import React, { useState } from "react";
import styled from "styled-components";
import { HeadingContainer, NumberSpan, Heading } from "../About/About";
import FilterJobs from "./FilterJobs";
import { workInfo } from "./workInfo";
import { motion, AnimatePresence } from "framer-motion";
import "./Work.css";
import * as colors from '../colors';

const WorkContainer = styled.section`
  height: auto;
  width: 100%;
  position: relative;
  color: white;
`;

const JobContainer = styled.div`
width: 80%;
height: 100%;
margin: auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
`

const JobList = styled.ul`
  list-style: none;
  display: inline-flex;
  justify-content: flex-start;
  width: 100%;
  padding-left: 40px;
  @media (max-width: 1024px) {
    padding-left: 0px;
    justify-content: center;
  }
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

const Work = () => {
  const [active, setActive] = useState(workInfo.length);

  return (
    <WorkContainer>
      <HeadingContainer>
        <Heading>
          <NumberSpan>03. </NumberSpan>Where I have worked
        </Heading>
      </HeadingContainer>
      <JobContainer>
        <JobList>
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
                    style={{borderBottom: `1px solid ${colors.accentColor1}`}}
                    layoutId="underline"
                    transition={{ duration: 0.5 }}
                  ></motion.div>
                ) : null}
              </JobElement>
            ))}
        </JobList>
        <JobDescription>
          <FilterJobs active={active} workInfo={workInfo} />
        </JobDescription>
      </JobContainer>
    </WorkContainer>
  );
};

export default Work;
