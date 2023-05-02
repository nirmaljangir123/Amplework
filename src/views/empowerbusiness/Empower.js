import React from "react";
import HomePage from "./empowersection/HomePage";
import InnovateFeature from "./empowersection/InnovateFeature";
import "../empowerbusiness/Empower.css";
import EnchanseRoi from "./empowersection/EnchanseRoi";
import ReasonAmplework from "./empowersection/ReasonAmplework";
import CategeryPhases from "./empowersection/CategeryPhases";
import BrandsCollabrate from "./empowersection/BrandsCollabrate";
import Tranforation from "./empowersection/Tranforation";
import OperationalCost from "./empowersection/OperationalCost";
import PshudoClass11 from "./empowersection/Pusdo";

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
      <section>
        <CategeryPhases />
      </section>
      <section className="brandebgcolor">
        <BrandsCollabrate />
      </section>
      <section>
        <Tranforation />
      </section>
      <section>
        <OperationalCost />
      </section>
      <section>
        <PshudoClass11/>
      </section>
    </div>
  );
};

export default Empower;
