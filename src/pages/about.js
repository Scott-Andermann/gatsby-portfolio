import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const AboutPage = ({ data }) => {
    console.log(data);

    return (
        <main>
            <Layout pageTitle='About'>
                <p style={{textAlign:'center'}}>I built this site using React and GatsbyJS!  This page is still a work in progress</p>
            </Layout>

        </main>
    );
}


export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export default AboutPage;