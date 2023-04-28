import React from "react";
import "../footer/Footer.css";
import FooterBlock from "./footersection/FooterBlock";
import FooterList from "./footersection/FooterList";
import Footerbar from "./footersection/Footerbar";
import Footerdmca from "./footersection/Footerdmca";

const Footer = () => {
  return (
    <>
      <FooterBlock />
      <section className="footerlistbgcolor">
        <FooterList />
      </section>
      <section className="footerbarbgcolor">
        <Footerbar/>
      </section>
      <section className="footerbarbgcolor1">
        <Footerdmca/>
      </section>
    </>
  );
};

export default Footer;
