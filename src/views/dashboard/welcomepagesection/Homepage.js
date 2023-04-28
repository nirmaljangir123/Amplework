import React from "react";
import { Button } from "react-bootstrap";
import "../welcomepagesection/Section.css";
import Homepagecomponent from "../../../component/homepage/Homepagecomponent";
import bgimage from "../../../assets/pnglogoimage/homebgimage.jpg";
const Homepage = () => {
  return (
    <>
        <Homepagecomponent
          smalltext="Application mantainance and support"
          text="Top classs application mantainace and support service for error-free,
        hight-performing applications"
          btn="Schdule a call"
          bgimage={bgimage}
        />
    </>
  );
};

export default Homepage;
