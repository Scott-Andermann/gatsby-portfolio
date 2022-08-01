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
        </div>
    )
}

export default Layout;