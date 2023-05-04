import React from "react";
import { Button } from "react-bootstrap";
import "../welcomepagesection/Section.css";
import Homepagecomponent from "../../../component/homepage/Homepagecomponent";
import { AppMaintanance } from "../../../mockup/support&mainteancemockup/SupportMockup";
const Homepage = () => {
  return (
    <>
      <Homepagecomponent propsdata={AppMaintanance} />
    </>
  );
};

export default Homepage;
