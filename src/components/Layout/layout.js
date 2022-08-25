import * as React from 'react';
// import github from '../../images/github65ccb8.png';
// import email from '../../images/email.png';
// import phone from '../../images/phone.png';
// import linkedin from '../../images/linkedin.png';
import ContactForm from '../Contact/ContactForm';
import ContactOverlay from '../Contact/ContactOverlay';
import './layout.css';

const Layout = ({ isShowing, setIsShowing, children }) => {

    function exitButton(e) {
        e.preventDefault();
        setIsShowing(false);
    }

    function closeForm() {
        setIsShowing(false);
    }

    return (
        <div className='background'>
            <title>Hello there! | Scott Andermann</title>
            {/* Need to move contact form to new component since it could be used in places other than Layout */}
            <ContactForm isShowing={isShowing} exitButton={exitButton} closeForm={closeForm} />
            <ContactOverlay />
            <main>
                {children}
            </main>
            {/* <footer>
                <div className='footer-contact-block header-container' >
                    <h2 className='footer-text'>Want to collaborate?</h2>
                    <div className='footer-contact-button' onClick={() => setIsShowing(true)}>
                        <h3 className='contact-me'>Contact Me</h3>
                    </div>

                </div>

                <ul className='contact-list'>
                    <li className='icon-wrapper'><h3 className='contact-text'>Hit me up:</h3></li>
                    <li className='icon-wrapper email' onClick={() => setIsShowing(true)}><img className='contact-icon' src={email} alt='email icon'/> ScottAndermann@gmail.com</li>
                    <li className='icon-wrapper phone'><img className='contact-icon' src={phone} alt='phone icon'/> 630.863.5072</li>
                    <li className='icon-wrapper'><a href='https://github.com/Scott-Andermann'><img className='contact-icon' src={github} alt='github icon'/> Scott-Andermann</a></li>
                    <li className='icon-wrapper'><a href='https://www.linkedin.com/in/scott-andermann'><img className='contact-icon' src={linkedin} alt='linkedin icon'/> ScottAndermann</a></li>
                </ul>
            </footer> */}
        </div>
    )
}

export default Layout;