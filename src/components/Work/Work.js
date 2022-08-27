import React, { useState } from "react";
import styled from "styled-components";
import { HeadingContainer, NumberSpan, Heading } from "../About/About";
import { workInfo } from "./workInfo";
import { motion, AnimatePresence } from "framer-motion";
import "./Work.css";

const WorkContainer = styled.section`
  height: 75vh;
  width: 100%;
  position: relative;
  color: white;
`;

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

const FilterJobs = ({ active }) => {
  const jobInfo = workInfo.filter((job) => job.id === active);

  return (
    <div>
      <h3>{jobInfo[0].title}</h3>
      <p>{jobInfo[0].company}</p>
      <ul style={{ paddingInlineStart: "40px" }}>
        {jobInfo[0].actions.length > 0 &&
          jobInfo[0].actions.map((action) => <li>{action}</li>)}
      </ul>
    </div>
  );
};

const Work = () => {
  const [active, setActive] = useState(workInfo.length);

  return (
    <WorkContainer>
      <HeadingContainer>
        <Heading>
          <NumberSpan>03. </NumberSpan>Professional Experience
        </Heading>
      </HeadingContainer>
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
                  layoutId="underline"
                  transition={{ duration: 0.5 }}
                ></motion.div>
              ) : null}
            </JobElement>
          ))}
      </JobList>
      <JobDescription>
        <FilterJobs active={active} />
      </JobDescription>
    </WorkContainer>
  );
};

export default Work;
