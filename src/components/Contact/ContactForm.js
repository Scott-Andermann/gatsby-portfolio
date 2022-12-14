import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ExitIcon from '../../images/ExitIcon';
import './ContactForm.css';


const exitIconStyle = {fill: '#FF6639', height: '50px', width: '50px'}

function ContactForm({ isShowing, closeForm, exitButton }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')

    function handleNameChange(e) {
        setName(e.target.value);
    }
    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handleMessageChange(e) {
        setMessage(e.target.value);
    }

    function validateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return (true)
        }
        alert("You have entered an invalid email address!")
        return (false)
    }

    function validateMessage(message) {
        if (message.length > 6) {
            return (true)
        }
        alert('Please leave me a little longer message why you would like to connect!')
        return false;
    }

    function validateName(name) {
        if (name.length > 0) {
            return (true);
        }
        alert('Please enter your name.')
        return false;
    }

    const form = useRef();

    const resetAndCloseForm = () => {
        alert('Thank you for your message, I will be in touch soon.')
        setEmail('');
        setName('');
        setMessage('');
        closeForm();
    }

    const sendEmail = (e) => {
        e.preventDefault();
        console.log('entered send email handler')
        if (validateName(name) && validateEmail(email) && validateMessage(message)) {
        emailjs.sendForm(
            "service_qvhg6ga",
            "template_4jaq4hx",
            form.current,
            "A4FLotPcQ7buG4U-K").then(
                result => console.log(result.text),
                error => console.log(error.text)
            );

        resetAndCloseForm();
        }
    }



    return (
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

            <form ref={form} className='contact-form' onSubmit={sendEmail}>
                <div className='exit-button' onClick={exitButton}><ExitIcon style={exitIconStyle} /></div>
                
                <label className='contact-label'>
                    Name
                    <input className='contact-form-input' type='text' name='from_name' value={name} onChange={handleNameChange} />
                </label>
                <label className='contact-label'>
                    Email
                    <input className='contact-form-input' type='text' name='user_email' value={email} onChange={handleEmailChange} />
                </label>
                <label className='contact-label'>
                    Message
                    <textarea className='contact-form-input textarea' type='text' name='message' value={message} onChange={handleMessageChange} />
                </label>
                <input className='submit' type='submit' value='Send' />
            </form>
        </div>
    )
}

export default ContactForm;