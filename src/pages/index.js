import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Jobs from "../components/Jobs/Jobs";
import Intro from "../components/Intro/Intro";
import Code from "../components/Code/Code";
import Hobbies from "../components/Hobbies/Hobbies";

const IndexPage = () => {
  return (
    <Layout pageTitle='Hello there!'>
      <Intro></Intro>
      <Code></Code>
      <Jobs></Jobs>
      <Hobbies></Hobbies>
    </Layout>

  )
}

export default IndexPage
