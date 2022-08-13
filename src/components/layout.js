import * as React from 'react';
import { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { container } from './layout.module.css';
import email from '../images/email.png';
import phone from '../images/phone.png';
import ContactForm from './ContactForm/ContactForm';
import './layout.css';
import Footer from './Footer';

const Layout = ({ pageTitle, children }) => {
  const [isShowing, setIsShowing] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

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
    <div className={container}>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      {/* Need to move contact form to new component since it could be used in places other than Layout */}
      <ContactForm isShowing={isShowing} exitButton={exitButton} closeForm={closeForm} />
      <nav>
        <ul className="nav-links">
          <li className="nav-link-item" onClick={contactForm}>
            <Link to="/" className="nav-link-text">
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>

      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
