import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const AboutPage = () => {
    return (
        <main>
            <Layout pageTitle='About'>
                <p>My name is Scott and I built this site using React and GatsbyJS!</p>
            </Layout>

        </main>
    );
}

export default AboutPage;