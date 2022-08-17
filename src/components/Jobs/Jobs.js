import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";
import './Jobs.css';
import Job from '../Job/Job';

const Jobs = () => {
    const data = useStaticQuery(graphql`
    query {
        allFile {
            nodes {
                name
            }
        }
    }`)
    // console.log(data.allFile.nodes[0].name);
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
        <div>
            <div className='job-container'>
                <div className='header-container job-header'>
                    <h2 className='job-header-text job-header-heading'>Previous Work Experience</h2>
                    <p className='job-header-text'>Here is a quick overview of my professional career.  Interested in details? Please reach out!</p>
                </div>
                <div className='jobs'>
                    {jobData.map(element => (
                        <Job src={element.src} title={element.title} name={element.name} description={element.description} website={element.website} />))}
                </div>
            </div>
        </div>

    )
}

export default Jobs;
