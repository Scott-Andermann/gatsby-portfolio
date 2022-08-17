import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Jobs from "../components/Jobs/Jobs";
import Intro from "../components/Intro/Intro";
import Code from "../components/Code/Code";
import Hobbies from "../components/Hobbies/Hobbies";
import '@fontsource/roboto';

const IndexPage = ({data}) => {

  return (
    <Layout pageTitle='Hello there!'>
      <Intro></Intro>
      <Code></Code>
      <Jobs></Jobs>
      <Hobbies data={data}></Hobbies>
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
