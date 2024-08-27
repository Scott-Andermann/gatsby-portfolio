import React, { useState } from "react";
import Layout from "../components/Layout/layout";
import Intro from "../components/Intro/Intro";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Work from "../components/Work/Work";
import Footer from "../components/Footer/Footer";
import "@fontsource/roboto/";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";

const contactModal = "contact-modal";

const IndexPage = () => {
  const [isShowing, setIsShowing] = useState(false);
  const toggleModal = () => {
    setIsShowing(!isShowing);
    const dialog = document.getElementById(contactModal);
    if (!dialog) {
      return;
    }
    if (isShowing) {
      console.log('closing modal');
      dialog.close();
      return;
    }
    console.log('showing modal');
    dialog.showModal();
  };

  return (
    <Layout isShowing={isShowing} setIsShowing={setIsShowing}>
      <Intro toggleModal={toggleModal} />
      <About />
      <Projects />
      <Work />
      <Footer toggleModal={toggleModal} />
    </Layout>
  );
};

export default IndexPage;
