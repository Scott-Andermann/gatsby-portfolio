import React from 'react';
import yamaha from '../../images/yamaha.jpg'
import husqvarna from '../../images/husqvarna.jpg';
import wessol from '../../images/flowzone.png';
import styled from 'styled-components';
import * as colors from '../colors';

const CardContainer = styled.div`
position: relative;
height: 350px;
display: flex;
margin-bottom: 3rem;
@media (max-width: 900px) {
    justify-content: center;
}
`

const JobDescriptor = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 1rem;
padding-bottom: 0;
padding-top: 0;
line-height: 1.25;
z-index: 1000;
@media (max-width: 900px) {
    width: 450px;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
}
`

const JobImage = styled.img`
height: 350px;
width: 400px;
border-radius: 3px;
@media (max-width: 900px) {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    opacity: .5;
    width: 450px;
}
@media (max-width: 450px) {
    width: 100%;
}
`

const LinkButton = styled.button`
height: 40px;
width: 150px;
border: none;
background-color: ${colors.accentColor1}bf;
border-radius: 20px;
color: white;
font-weight: 500;
font-size: 1.2rem;
`

const JobCard = ({job}) => {

    const src = () => {
        switch (job.company) {
            case 'YAMAHA':
                return yamaha;
            case 'WESSOL, LLC':
                return wessol;
            case 'HUSQVARNA':
                return husqvarna;
        }
    }
    return (
        <CardContainer style={job.id % 2 != 0 ? {flexDirection: 'row'} : {flexDirection: 'row-reverse'} }>
            <JobImage src={src()} alt='work image'/>
            <JobDescriptor style={job.id % 2 != 0 ? {paddingLeft: '2rem'} : {paddingLeft: 0}} >
                <h3 style={{fontSize: '1.5rem'}}>{job.company}</h3>
                <h4>{job.title}</h4>
                <p>{job.duration}</p>
                <ul style={{paddingInlineStart: '40px'}}>
                    {job.actions.length > 0 && job.actions.map(action => <li key={action[0]}>{action}</li>)}
                </ul>
                <LinkButton onClick={() => window.open(job.website)}>Learn More</LinkButton>
            </JobDescriptor>

        </CardContainer>
    )
}

export default JobCard;