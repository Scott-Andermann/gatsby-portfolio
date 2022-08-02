import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const AboutPage = ({ data }) => {
    console.log(data);

    return (
        <main>
            <Layout pageTitle='About'>
                <p>My name is Scott and I built this site using React and GatsbyJS!</p>
                <ul>
                    {
                        data.allFile.nodes.map(node => (
                            <li key={node.name}>
                                {node.name}
                            </li>
                        ))
                    }
                </ul>
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