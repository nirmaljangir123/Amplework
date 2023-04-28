import React from "react";
import HomePage from "./empowersection/HomePage";
import InnovateFeature from "./empowersection/InnovateFeature";
import "../empowerbusiness/Empower.css";
import EnchanseRoi from "./empowersection/EnchanseRoi";

const Empower = () => {
  return (
    <div className="page-containe">
      <HomePage />
      <section className="innovatesection">
        <InnovateFeature />
      </section>
      <section>
        <EnchanseRoi />
      </section>
    </div>
  );
};

export default Empower;
