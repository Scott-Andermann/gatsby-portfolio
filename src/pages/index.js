import * as React from "react";
import Layout from "../components/Layout/layout";
import { graphql } from "gatsby";
import Intro from "../components/Intro/Intro";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Work from "../components/Work/Work";
import Footer from "../components/Footer/Footer";
import '@fontsource/roboto/';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';

const IndexPage = () => {

  const [isShowing, setIsShowing] = React.useState(false);

  return (
    <Layout isShowing={isShowing} setIsShowing={setIsShowing}>
      <Intro setIsShowing={setIsShowing}></Intro>
      <About />
      <Projects />
      <Work />
      <Footer setIsShowing={setIsShowing}/>
    </Layout>
  )
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

export default IndexPage
