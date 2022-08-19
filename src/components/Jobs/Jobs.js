import * as React from 'react';
import './Jobs.css';
import Job from './Job';

const Jobs = () => {

    const jobData = [{
        src: 'wessol',
        title: 'WESSOL, LLC',
        name: 'wessol',
        description: 'Brought new products to market in the professional spraying industry',
        website: 'https://www.wessol.com/'
    },
    {
        src: 'yamaha',
        title: 'Yamaha Motors',
        name: 'yamaha',
        description: 'Designed and tested off road recreational vehicles',
        website: 'https://www.yamahamotorsports.com/side-by-side'
    },
    {
        src: 'husqvarna',
        title: 'Husqvarna Group',
        name: 'husky',
        description: 'Designed and tested commercial turf care equipment',
        website: 'https://www.husqvarna.com/us/'
    },

    ]
    return (
        <div className='job-container'>
            <div className='header-container job-header'>
                <h2 className='header-text job-header-heading'>Previous Work Experience</h2>
                <p className='header-text'>A quick overview of my professional career.</p>
            </div>
            <div className='jobs'>
                {jobData.map(element => (
                    <Job src={element.src} title={element.title} name={element.name} description={element.description} website={element.website} />))}
            </div>
        </div>

    )
}

export default Jobs;
