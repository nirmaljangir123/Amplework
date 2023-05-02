import React from "react";
import HomePage from "./empowersection/HomePage";
import InnovateFeature from "./empowersection/InnovateFeature";
import "../empowerbusiness/Empower.css";
import EnchanseRoi from "./empowersection/EnchanseRoi";
import ReasonAmplework from "./empowersection/ReasonAmplework";
import CategeryPhases from "./empowersection/CategeryPhases";
import BrandsCollabrate from "./empowersection/BrandsCollabrate";

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
      <section className="Reasionbackimage">
        <ReasonAmplework />
      </section>
      <section >
        <CategeryPhases/>
      </section>
      <section>
        <BrandsCollabrate/>
      </section>
    </div>
  );
};

export default Empower;
