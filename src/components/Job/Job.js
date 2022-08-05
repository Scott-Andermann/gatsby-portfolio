import * as React from 'react';
import yamaha from '../../images/yamaha.jpg'
import husqvarna from '../../images/husqvarna.jpg'
import wessol from '../../images/flowzone.png'


const Job = (props) => {
    const src = () => {
        switch (props.src) {
            case 'yamaha':
                return yamaha;
            case 'wessol':
                return wessol;
            case 'husqvarna':
                return husqvarna;
        }
    }


    function handleClick() {
        window.open(props.website);
    }

    return (
        <div className={`job ${props.name}`} >
            <img className='job-image' alt='job image' src={src(props.src)} />
            <div className='overlay'>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <div className='link' onClick={handleClick}>
                    <p>Visit Website</p>
                </div>

            </div>
        </div>
    )
}

export default Job;