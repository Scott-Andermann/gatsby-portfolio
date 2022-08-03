import * as React from 'react';
import gitHubWhite from '../../images/githubwhite.png';
import flappyBird from '../../images/flappybird2.gif';
import warranty from '../../images/warranty.png';
import powerMeter from '../../images/powermeter.jpg';
import weather from '../../images/weather.png'


const Hobby = (props) => {

    const src = () => {
        switch (props.src) {
            case 'powerMeter':
                return powerMeter;
            case 'flappy':
                return flappyBird;
            case 'weather':
                return weather;
            case 'warranty':
                return warranty;
        }
    }

    return (
        <div className={`hobby ${props.name}`} >
            <img className='hobby-image' alt='hobby image' src={src(props.src)} />
            <div className='hobby-overlay'>
                <h2 className='hobby-text'>{props.name}</h2>
                <p className='hobby-text'>{props.description}</p>
                <h4 className='hobby-text'>Tools used:</h4>
                <ul className='hobby-tools'>
                    {props.tools.map(element => <li className='hobby-tools-item'>{element}</li>)}
                </ul>
                <a href={props.github} className='icon'><img className='icon' src={gitHubWhite} /> GitHub</a>
            </div>
        </div>
    )
}

export default Hobby;