import React from "react";

import "../../views/elevatewebpage/elevatesection/ElevateSection.css";
import Elevatebgimage from "../../assets/pnglogoimage/Elevatebgimage.jpg";
import Homepagecomponent from "../../component/homepage/Homepagecomponent";
const Elevate = () => {
  return (
    <>
      <div className="page-containe">
        <Homepagecomponent
          smalltext="Culture and Life at AmpleWork"
          text="Elevate Your Web Presence With Enterprise Website Development"
          bgimage={Elevatebgimage}
        />
      </div>
    </>
  );
};
export default Elevate;
