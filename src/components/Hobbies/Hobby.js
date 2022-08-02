import * as React from 'react';
import gitHubWhite from '../../images/githubWhite.png';


const Hobby = (props) => {
    return (
        <div className={`hobby ${props.name}`} >
            <img className='hobby-image' alt='hobby image' src={props.src} />
            <div className='hobby-overlay'>
                <h2 className='hobby-text'>{props.name}</h2>
                <p className='hobby-text'>{props.description}</p>
                <h4>Tools used:</h4>
                <ul className='hobby-tools'>
                    {props.tools.map(element => <li className='hobby-tools-item'>{element}</li>)}
                </ul>
                <a href={props.github} className='icon'><img className='icon' src={gitHubWhite} /> GitHub</a>
            </div>
        </div>
    )
}

export default Hobby;