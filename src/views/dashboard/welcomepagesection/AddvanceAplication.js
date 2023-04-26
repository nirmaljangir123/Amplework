import React from "react";
import { CardGroup } from "react-bootstrap";
import CardsComponent from "../../../component/Boxset/Card";

import softwareapplicaton11 from "../../../assets/pnglogoimage/software-application11.png";
import outline11 from "../../../assets/pnglogoimage/OUTLINE11.png";
import datatranfer11 from "../../../assets/pnglogoimage/data-transfer11.png";
import { MyButton } from "../../../component/button/Button";
const AddvanceAplication = () => {
  return (
    <div className="container text-center">
      <h2 className=" px-2">
        Our Advanced Application Support Service - Elevate Your Application's
        Performance
      </h2>
      <p className=" px-5 py-4">
        Complex applications which are configured with the latest APIs require
        the advanced solutions to keep the working mechanism of the applications
        in a perfect shape. At Amplework,
      </p>
      <div>
        <CardGroup>
          <CardsComponent
            data={softwareapplicaton11}
            text="Application Re-engineering"
            smalltext="Our developers evaluate existing applications through a series ofin-house testing processes in order to evaluate the functionalities ofthe applications that need to be re-engineered"
          />
          <CardsComponent
            data={outline11}
            text="Application Migration & Integration"
            smalltext="Our engineers are profound in supporting you for moving applications from physical or local settings to remote based servers. We also provide application migration as well as integration services."
          />
          <CardsComponent
            data={datatranfer11}
            text="Application Support"
            smalltext="It includes a range of activities for ensuring proper functioning and optimization of a web or mobile application. We focus towards continuous monitoring and continuous improvement of functions."
          />
        </CardGroup>
      </div>
      <div className="pt-4">
        <MyButton text="Get a Free Quote" color="#fff" />
      </div>
    </div>
  );
};

export default AddvanceAplication;
