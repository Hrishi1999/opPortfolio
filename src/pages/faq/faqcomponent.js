import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Faqs from "../faq/faq.js"
import { Fade } from "react-reveal";
//import two from "./2.avif"
function faqcomponent(props) {
  const theme = props.theme;
  return (
    <div className="education-main">
      <Header theme={props.theme} setTheme={props.setTheme} />
     <Faqs/>
      <Footer theme={props.theme} />
    </div>
  );
}

export default faqcomponent;
