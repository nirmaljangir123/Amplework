import React from "react";
import Homepagecomponent from "../../../component/homepage/Homepagecomponent";
import empower from "../../../assets/pnglogoimage/Empower.jpg";
const HomePage = () => {
  return (
    <Homepagecomponent
      smalltext="ADVANCED ENTERPRISE MOBILITY SOLUTIONS"
      text="Empower Business Operations Form Enterprise Mobility Development"
      btn=""
      bgimage={empower}
    />
  );
};

export default HomePage;
