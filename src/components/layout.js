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
import ContactForm from './ContactForm/ContactForm';
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

    function contactForm() {
        setIsShowing(true);
    }

    function exitButton(e) {
        e.preventDefault();
        setIsShowing(false);
    }

    function closeForm() {
        setIsShowing(false);
    }

    return (
        <div className='background'>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            {/* Need to move contact form to new component since it could be used in places other than Layout */}
            <ContactForm isShowing={isShowing} exitButton={exitButton} closeForm={closeForm} />
            <nav>
                <ul className='nav-links'>
                    <li className='nav-link-item' onClick={contactForm}><Link to='/' className='nav-link-text'>Contact Me</Link></li>
                </ul>
            </nav>
            <div className='contact-overlay'>
                <div>
                    <li className='icon-wrapper'><a href='https://github.com/Scott-Andermann'><img className='contact-icon' src={github} /></a></li>
                    <li className='icon-wrapper'><a href='https://www.linkedin.com/in/scott-andermann'><img className='contact-icon' src={linkedin} /></a></li>
                </div>
                <div className='email-overlay'>
                    <a href="mailto:scottandermann@gmail.com">ScottAndermann@gmail</a>
                </div>
            </div>

            <main>
                {children}
            </main>
            <footer>
                <div className='footer-contact-block header-container' >
                    <h2 className='footer-text'>Want to collaborate?</h2>
                    <div className='footer-contact-button' onClick={contactForm}>
                        <h3 className='contact-me'>Contact Me</h3>
                    </div>

                </div>

                <ul className='contact-list'>
                    <li className='icon-wrapper'><h3 className='contact-text'>Hit me up:</h3></li>
                    <li className='icon-wrapper email' onClick={contactForm}><img className='contact-icon' src={email} /> ScottAndermann@gmail.com</li>
                    <li className='icon-wrapper phone'><img className='contact-icon' src={phone} /> 630.863.5072</li>
                    <li className='icon-wrapper'><a href='https://github.com/Scott-Andermann'><img className='contact-icon' src={github} /> Scott-Andermann</a></li>
                    <li className='icon-wrapper'><a href='https://www.linkedin.com/in/scott-andermann'><img className='contact-icon' src={linkedin} /> ScottAndermann</a></li>
                </ul>
            </footer>
        </div>
    )
}

export default Layout;