import * as React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import './Intro.css';
import avatar from '../../images/avatar.jpg';
import mountains from '../../images/mountains.jpg';


const Intro = () => {
    return (
        <div className='intro'>
            <img className='avatar' alt="avatar of me" src={avatar} />
            <br></br>
            <img className='mountains' alt='line drawing of mountains' src={mountains} />
            <p className='intro-text'>Hi, my name is Scott Andermann and I took the scenic to web development. I spent the early part of my career designing off road vehicles. 
                From there I completed my MBA and transistioned into a Product Manager role for consumer goods.  I bring an endless curiosity to any new challenge 
                and won't hesitate to jump into the unknown to find the solution to a problem.</p>

        </div>
    )
}

export default Intro;