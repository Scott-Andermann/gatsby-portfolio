import React, {useState, useEffect} from "react";
import styled from "styled-components";
import * as color from '../colors';
import ArrowBullet from '../../images/ArrowBullet';

const JobInfoContainer = styled.div`
height: auto;
width: 100%;
padding: 1.5rem;
background-color: ${color.textBoxColor};
border-radius: 3px;
margin-bottom: 4rem;
`

const Title = styled.h3`
color: ${color.accentColor1};
font-weight: normal;
margin-bottom: 1rem;
`

const Action = styled.li`
line-height: 1.5rem;
opacity: 0.8;
text-indent: -20px;
`

const DurationSpan = styled.span`
color: white;
font-weight: normal;
opacity: 0.6;
`

const arrowStyle = {
    height: '20px',
    width: '20px',
    fill: '#FF6639',
    marginBottom: '-5px',
    className: 'job-arrow'
}

const FilterJobs = ({ active, workInfo }) => {
    const [jobInfo, setJobInfo] = useState(workInfo.filter((job) => job.id === active))
    // const jobInfo = workInfo.filter((job) => job.id === active);

    useEffect(() => {
        setJobInfo(workInfo.filter((job) => job.id === active))
    }, [active]);
    

    return (
        <JobInfoContainer>
            <Title>{jobInfo[0].title} -- <DurationSpan> {jobInfo[0].duration}</DurationSpan></Title>
            <ul style={{ paddingInlineStart: "40px", listStyle: 'none' }}>
                {jobInfo[0].actions.length > 0 &&
                    jobInfo[0].actions.map((action) => <Action><ArrowBullet style={arrowStyle} />{action}</Action>)}
            </ul>
        </JobInfoContainer>
    );
};

export default FilterJobs;