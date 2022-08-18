import * as React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Jobs from '../components/Jobs/Jobs';
import Intro from '../components/Intro/Intro';
import Code from '../components/Code/Code';
import Hobbies from '../components/Hobbies/Hobbies';
import About from '../components/About';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Projects from '../components/Projects';

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const IndexPage = ({ data }) => {
  return (
    <StyledMain pageTitle="Hello there!">
      <Intro></Intro>
      <About />
      <Projects />
      <Footer />
    </StyledMain>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default IndexPage;
