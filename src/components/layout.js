import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import {
    container,
    heading,
    heading2,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle
} from './layout.module.css';
import github from '../images/github65ccb8.png';
import email from '../images/email.png';
import phone from '../images/phone.png';
import linkedin from '../images/linkedin.png';
import './layout.css'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }`)

    return (
        <div className={container}>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <div>
                <header className={siteTitle}>{data.site.siteMetadata.title}</header>
            </div>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to='/' className={navLinkText}>Home</Link></li>
                    <li className={navLinkItem}><Link to='/about' className={navLinkText}>About</Link></li>

                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                <h2 className={heading2}>I love building new things and fixing old things</h2>
                {children}
            </main>
            <footer>
                
                <ul className='contact-list'>
                    <li className='icon-wrapper'><h2>Hit me up:</h2></li>
                    <li className='icon-wrapper'><a className='contact-text' href='#'><img className='contact-icon' src={email} /> ScottAndermann@gmail.com</a></li>
                    <li className='icon-wrapper phone'><img className='contact-icon' src={phone} /> 630.863.5072</li>
                    <li className='icon-wrapper'><a href='#'><img className='contact-icon' src={github} /> Scott-Andermann</a></li>
                    <li className='icon-wrapper'><a href='https://www.linkedin.com/in/scott-andermann'><img className='contact-icon' src={linkedin} /> ScottAndermann</a></li>
                </ul>
            </footer>
        </div>
    )
}

export default Layout;