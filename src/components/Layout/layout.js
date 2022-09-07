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
            <ContactForm isShowing={isShowing} exitButton={exitButton} closeForm={closeForm} />
            <ContactOverlay />
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout;