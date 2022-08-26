import * as React from "react";
import Layout from "../components/Layout/layout";
import { graphql } from "gatsby";
// import Jobs from "../components/Jobs/Jobs";
import Intro from "../components/Intro/Intro";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Work from "../components/Work/Work";
import Footer from "../components/Footer/Footer";
// import Code from "../components/Code/Code";
// import Hobbies from "../components/Hobbies/Hobbies";
import '@fontsource/roboto/';
import '@fontsource/roboto/900.css'

const IndexPage = ({data}) => {

  const [isShowing, setIsShowing] = React.useState(false);

  return (
    <Layout isShowing={isShowing} setIsShowing={setIsShowing}>
      <Intro setIsShowing={setIsShowing}></Intro>
      <About />
      <Projects />
      <Work />
      <Footer />
      {/* <Code></Code>
      <Jobs></Jobs>
      <Hobbies data={data}></Hobbies> */}
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
