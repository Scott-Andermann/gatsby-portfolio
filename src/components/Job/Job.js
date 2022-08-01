import * as React from 'react';


const Job = (props) => {
    return (
        <div className={`job ${props.name}`} >
            <img alt='job image' src={props.src} />
            <div className='overlay'>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <div className='link'>
                    <a href={props.website}>Visit Website</a>
                </div>

            </div>
        </div>
    )
}

export default Job;