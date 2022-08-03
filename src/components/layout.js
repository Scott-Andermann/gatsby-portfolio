import * as React from 'react';
import { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import {
    container
} from './layout.module.css';
import github from '../images/github65ccb8.png';
import email from '../images/email.png';
import phone from '../images/phone.png';
import linkedin from '../images/linkedin.png';
import './layout.css';

const Layout = ({ pageTitle, children }) => {
    const [isShowing, setIsShowing] = useState(false);

    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }`)

    const isHidden = (element) => element.classList.contains('show');

    function contactForm() {
        setIsShowing(true);
    }

    function closeForm() {
        setIsShowing(false);
    }

    return (
        <div className={container}>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <div>
                <header className='site-title'>{data.site.siteMetadata.title}</header>
            </div>
            {/* Need to move contact form to new component since it could be used in places other than Layout */}
            <div className={`contact-form-container`} style={isShowing ? {
                height: '100%',
                opacity: 0.9,
                transition: 'height 0s linear, opacity 0.5s linear'
            } : {
                height: '0%',
                opacity: 0,
                pointerEvents: 'none',
                transition: 'height 0s linear 0.5s, opacity 0.5s linear'
            }}>
                
                <form className='contact-form'>
                    <button className='exit-button' onClick={closeForm}>X</button>
                    <label className='contact-label'>
                        Name
                        <input className='contact-form-input' type='text' name='name' />
                    </label>
                    <label className='contact-label'>
                        Email
                        <input className='contact-form-input' type='text' name='email' />
                    </label>
                    <label className='contact-label'>
                        Message
                        <textarea className='contact-form-input textarea' type='text' name='message' />
                    </label>
                    <input className='submit' type='submit' value='Send' />
                </form>
            </div>
            <nav>
                <ul className='nav-links'>
                    <li className='nav-link-item'><Link to='/' className='nav-link-text'>Home</Link></li>
                    <li className='nav-link-item'><Link to='/about' className='nav-link-text'>About</Link></li>
                    <li className='nav-link-item' onClick={contactForm}>Contact</li>

                </ul>
            </nav>

            <main>
                <h1 className='heading'>{pageTitle}</h1>
                {pageTitle==='Hello there!' ? <h2 className='heading2'>I love building new things and fixing old things</h2>: ''}
                {children}
            </main>
            <footer>

                <ul className='contact-list'>
                    <li className='icon-wrapper'><h2>Hit me up:</h2></li>
                    <li className='icon-wrapper'><a className='contact-text' href='#'><img className='contact-icon' src={email} /> ScottAndermann@gmail.com</a></li>
                    <li className='icon-wrapper phone'><img className='contact-icon' src={phone} /> 630.863.5072</li>
                    <li className='icon-wrapper'><a href='https://github.com/Scott-Andermann'><img className='contact-icon' src={github} /> Scott-Andermann</a></li>
                    <li className='icon-wrapper'><a href='https://www.linkedin.com/in/scott-andermann'><img className='contact-icon' src={linkedin} /> ScottAndermann</a></li>
                </ul>
            </footer>
        </div>
    )
}

export default Layout;