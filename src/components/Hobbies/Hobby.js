import * as React from 'react';
import gitHubWhite from '../../images/githubwhite.png';
import flappyBird from '../../images/flappybird2.gif';
import warranty from '../../images/warranty.png';
import powerMeter from '../../images/powermeter.jpg';
import weather from '../../images/weather.png';
import sentiment from '../../images/sentiment.png';


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
            case 'sentiment':
                return sentiment;
        }
    }

    function handleClick() {
        window.open(props.github);
    }

    return (
        <div className={`hobby ${props.name}`} onClick={handleClick} >
            <img className='hobby-image' alt='hobby' src={src(props.src)} />
            <div className='hobby-overlay' onClick={handleClick}>
                <h2 className='hobby-text'>{props.name}</h2>
                <p className='hobby-text'>{props.description}</p>
                <h4 className='hobby-text'>Tools used:</h4>
                <ul className='hobby-tools'>
                    {props.tools.map(element => <li className='hobby-tools-item'>{element}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default Hobby;