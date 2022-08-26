import React, { useState } from "react";
import styled from "styled-components";
import { HeadingContainer, NumberSpan, Heading } from "../About/About";
import { workInfo } from "./workInfo";
import { motion, AnimatePresence } from 'framer-motion';
import './Work.css';

const WorkContainer = styled.section`
height: 75vh;
width: 100%;
position: relative;
color: white;
`

const JobList = styled.ul`
list-style: none;
display: inline-flex;
justify-content: space-around;
width: 100%;
`

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
`

const JobDescription = styled.div`
width: 100%;
height: 100px;
background-color: #104966;
border-radius: 3px;
`

const jobs = ['WESSOL', 'Husqvarna', 'Yamaha', 'Woodward']

const FilterJobs = ({active}) => {
    const jobInfo = workInfo.filter(job => job.id === active);
    console.log(jobInfo);
    return (
        <div>
            <p>{jobInfo[0].title}</p>
            <p>{jobInfo[0].company}</p>
        </div>
    )
}

const Work = () => {
    const [active, setActive] = useState(workInfo.length);



    return (
        <WorkContainer>
            <HeadingContainer>
                <Heading><NumberSpan>03. </NumberSpan>Professional Experience</Heading>
            </HeadingContainer>
            <JobList>
                {workInfo.length > 0 && workInfo.map(job => <JobElement as={motion.li}
                    className={active === job.id ? 'active': ''}
                    key={job.id}
                    onClick={() => setActive(job.id)}>
                    <h3>{job.company}</h3>
                    {active === job.id ?
                        <motion.div className='underline'
                            layoutId='underline'
                            transition={{ duration: 0.5 }}>
                        </motion.div>
                        : null}
                </JobElement>)
                }
            </JobList>
            <JobDescription>
                <FilterJobs active={active} />
            </JobDescription>
        </WorkContainer>
    )
}

export default Work;