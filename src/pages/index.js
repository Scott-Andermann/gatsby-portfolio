import React, {useState, useEffect} from "react";
import Layout from "../components/Layout/layout";
import Loading from "../components/Animations/Loading";
import Intro from "../components/Intro/Intro";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Work from "../components/Work/Work";
import Footer from "../components/Footer/Footer";
import '@fontsource/roboto/';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';

const IndexPage = () => {

  const [isShowing, setIsShowing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [render, setRender] = useState(true);

  // useEffect(() => {
  //   const loadData = async () => {
  //     await new Promise((r) => setTimeout(r, 800));
  //     setIsLoading(isLoading => !isLoading);
  //   };
  //   loadData();
  // }, [])
  
  // if(render) {
  //   return (
  //     <Loading isLoading={isLoading} setRender={setRender} render={render}/>
  //   )
  // }
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

export default IndexPage;
