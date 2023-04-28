import React from "react";
import "../dashboard/Welcome.css";
import franqbg from "../../assets/pnglogoimage/frenqutelybg.png";
import shokesbgimage from "../../assets/pnglogoimage/shokesbgimage.png";

import Homepage from "./welcomepagesection/Homepage";
import DedicatedDeveloper from "./welcomepagesection/DedicatedDeveloper";
import Experience from "./welcomepagesection/Experience";
import AddvanceAplication from "./welcomepagesection/AddvanceAplication";
import Activities from "./welcomepagesection/Activities";
import Maintaine from "./welcomepagesection/Maintaine";
import AppShape from "./welcomepagesection/AppShape";
import Fascinating from "./welcomepagesection/Fascinating";
import SpeakNumbers from "./welcomepagesection/SpeakNumbers";
import Searching from "./welcomepagesection/Searching";
import Frequently from "./welcomepagesection/Frequently";
import FullstackDev from "./welcomepagesection/FullstackDev";
import ProudlyShowcase from "./welcomepagesection/ProudlyShowcase";
import Sweatcoin from "./welcomepagesection/Sweatcoin";
import Productidea from "./welcomepagesection/Productidea";
import AmpleValidation from "./welcomepagesection/AmpleValidation";

const Welcome = () => {
  return (
    <>
      <div className="page-containe">
        <Homepage />
        <section>
          <DedicatedDeveloper />
        </section>
        <section className="experiencebgcolor">
          <Experience />
        </section>
        <section>
          <AddvanceAplication />
        </section>
        <section className="activtiesbgcolor">
          <Activities />
        </section>
        <section>
          <Maintaine />
        </section>
        <section className="appshapebgcolor">
          <AppShape />
        </section>
        <section className="fasinatebgcolor">
          <Fascinating />
        </section>
        <section className="numberbgcolor">
          <SpeakNumbers />
        </section>
        <section className="freaqbgcolor">
          <Searching />
        </section>
        <section
          className="frenquentlyimage"
          style={{
            backgroundImage: `Url(${franqbg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Frequently />
        </section>
        <section className="dedicatedbgcolor">
          <FullstackDev />
        </section>
        <section className="prowdbgcolor">
          <ProudlyShowcase />
        </section>
        <section className="shokesbgcolor py-4 text-center">
          <h2>Portifolio of our Accomplishments</h2>
        </section>
        <section
          style={{
            backgroundImage: `Url(${shokesbgimage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Sweatcoin />
        </section>
        <section className="shokesbgcolor">
          <Productidea />
        </section>
        <section className="formvalidation p-0">
          <AmpleValidation />
        </section>
      </div>
    </>
  );
};
export default Welcome;
