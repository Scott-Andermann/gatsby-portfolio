import React from 'react';
import styled from 'styled-components';

const HexBase = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
font-size: initial;
shape-outside: polygon(0% 0%, 25% 0%, 0% 50%);
shape-margin: 5px;
clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
background-color: #104966;
overflow: auto;
padding: 1.5rem;
`

const actions = ['action1', 'action2', 'action3']

const Hexagon = ({style, job}) => {
    if (job) {
  return (
    <HexBase style={{width: style.width, height: style.height}}>
        <h3>{job.title}</h3>
        <h4>{job.company} - {job.duration}</h4>
        <ul>
            {job.actions.map(action => <li>{action}</li>)}
        </ul>
    </HexBase>
  )
    } else return (
        <HexBase style={{width: style.width, height: style.height}}>
        </HexBase>
    )
};

export default Hexagon;