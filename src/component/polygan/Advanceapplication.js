import React from "react";
import Cards from "../Boxset/Card";
import CardGroup from 'react-bootstrap/CardGroup';
import softwareapplication from '../../assets/pnglogoimage/software-application.png'
import outline from '../../assets/pnglogoimage/OUTLINE.png'
import datatransfer from '../../assets/pnglogoimage/data-transfer.png'
import { AiOutlineCluster } from "react-icons/ai";
import { MyButton } from "../button/Button";

const Advanceapplication = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="py-5">
          <h4 className="text-center px-2">Our Advanced Application Support Service - Elevate Your Application's Performance</h4>
          <p className=" px-4 text-center">
            Complex applications which are configured with the latest APIs require the advanced solutions to keep the working mechanism of the applications in a perfect shape. At Amplework,
          </p>
          <CardGroup>
            {/* <Cards propsdata={{
                pic: {AiOutlineCluster},
                smalltext: "Application Re-engineering",
                text: "Our developers evaluate existing applications through a series of in-house testing processes in order to evaluate the functionalities of the applications that need to be re-engineered."
              }} />
              <Cards propsdata={{
                pic: datatransfer,
                smalltext: "Application Migration & Integration",
                text: "Our engineers are profound in supporting you for moving applications from physical or local settings to remote based servers. We also provide application migration as well as integration services."
              }} />
              <Cards propsdata={{
                pic: outline,
                smalltext: "Application Support",
                text: "It includes a range of activities for ensuring proper functioning and optimization of a web or mobile application. We focus towards continuous monitoring and continuous improvement of functions. "
              }} /> */}
            <Cards />

          </CardGroup>
          <div className="text-center py-4">
            <MyButton text="Get a Free Quote"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advanceapplication;
