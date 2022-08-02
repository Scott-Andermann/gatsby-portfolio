import * as React from 'react';
import Hobby from './Hobby';
import './Hobbies.css';

const Hobbies = (props) => {
    const hobbyData = [
        {
            name: 'Cycling power meter',
            tools: ['CircuitPy', 'Circuit Design', '3D printing'],
            description: 'Designed, built, and debugged bluetooth power meter for bicycles.  Integrated gyroscope, accelerometer, and custom Wheatstone bridge for measuring force and calculating power.',
            src: 'powerMeter',
            github: '#'
        },
        {
            name: 'Weather App',
            tools: ['Javascript', 'React', 'CSS'],
            description: 'Single page React app with location and weather API calls.  Shows current and forecast weather information for any US zipcode.',
            src: 'weather',
            github: 'https://github.com/Scott-Andermann/weatherApp'
        },
        {
            name: 'ML Flappy Bird',
            tools: ['Pygame', 'Machine Learning'],
            description: 'Built an interactive game with machine learning integration to explore ML/AI tools.',
            src: 'flappy',
            github: 'https://github.com/Scott-Andermann/flappyBird'
        },
        {
            name: 'Warranty Tracker',
            tools: ['Python', 'Plotly', 'ShopifyAPI'],
            description: 'Created a python based web-app to track warranty claims over time.',
            src: 'warranty',
            github: '#'
        }
    ]

    console.log(props);

    return (
        <div className='top-hobbies'>
            <div className='hobby-header'>
                <h2 className='hobby-header-text'>Extracurriculars</h2>
                <p className='hobby-header-text'>I spend my free time tinkering on all kinds of projects</p>
            </div>
            <div className='hobby-container'>
                {hobbyData.map(element => <Hobby name={element.name}
                    src={element.src}
                    description={element.description}
                    tools={element.tools}
                    github={element.github} />
                )}
            </div>

        </div>
    )
}


export default Hobbies;