import React from "react";

import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { GrSystem, GrCloudSoftware, GrVirtualMachine } from "react-icons/gr";
import { GiCoolSpices } from "react-icons/gi";
import { MdOutlineAppShortcut } from "react-icons/md";
import { SiAzuredataexplorer } from "react-icons/si";
import { RiApps2Fill } from "react-icons/ri";
import { SlGameController } from "react-icons/sl";

export const AppcardsGroup = (propsvalue) => {
  console.warn("========>props icon", propsvalue.text);
  return (
    <>
      <Card className="cardsshadow text-center justify-content-between m-2">
        <Card.Body className="py-5">
          <p className="iconsize">{propsvalue.icon}</p>
          <Card.Title className="icontitletext">{propsvalue.text}</Card.Title>
          <Card.Text>{propsvalue.smalltext}</Card.Text>
          <Card.Text>{propsvalue.link}</Card.Text>

        </Card.Body>
      </Card>
      {/* <Card className="titleclass">
        <Card.Body>
          <Card.Title>{propsvalue.text}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card> */}
    </>
  );
};

const AppsMaintaine = () => {
  return (
    <div className="container-fluid">
      <div className="container py-5">
        <div className="text-center">
          <p>Keep Your Applications Always Shine</p>
          <h3>Types of Apps We Maintain At Amplework Software</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>

        <CardGroup className="">
          <AppcardsGroup icon={GrSystem()} text="Web Apps" />
          <AppcardsGroup icon={GrCloudSoftware()} text="Cloud Apps & SaaS" />
          <AppcardsGroup icon={GiCoolSpices()} text="Enterprise Apps" />
          <AppcardsGroup icon={MdOutlineAppShortcut()} text="AR/VR Apps" />
        </CardGroup>
        <CardGroup>
          <AppcardsGroup icon={SiAzuredataexplorer()} text="Database Apps" />
          <AppcardsGroup icon={RiApps2Fill()} text="AI/ML Apps" />
          <AppcardsGroup icon={SlGameController()} text="Gaming Apps" />
          <AppcardsGroup icon={GrVirtualMachine()} text="Hybrid Apps" />
        </CardGroup>
      </div>
    </div>
  );
};

export default AppsMaintaine;
