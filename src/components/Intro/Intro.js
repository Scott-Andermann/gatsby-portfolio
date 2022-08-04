import * as React from 'react';
import './Intro.css';
import mountains from '../../images/mountains.png';


const Intro = () => {
    return (
        <div className='intro'>
            <img className='mountains' alt='line drawing of mountains' src={mountains} />
            <p className='intro-text'>Hi, my name is Scott Andermann and I took the scenic to web development. I spent the early part of my career designing off road vehicles. 
                From there I completed my MBA and transistioned into a Product Manager role for consumer goods.  I bring an endless curiosity to any new challenge 
                and won't hesitate to jump into the unknown to find the solution to a problem.</p>

        </div>
    )
}

export default Intro;