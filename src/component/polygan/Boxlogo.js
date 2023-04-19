import React from "react";
import Boxlogo from "../Boxset/Boxlogo";
import "../Boxset/box.css";
import Boxcomponent from "../Boxset/Boxlogo";
import warning from "../../assets/pnglogoimage/warning.png";
import solution from "../../assets/pnglogoimage/solution.png";
import setting from "../../assets/pnglogoimage/setting.png";
import speedtext from "../../assets/pnglogoimage/speedtest.png";
import scalability from "../../assets/pnglogoimage/Scalability.png";
import api from "../../assets/pnglogoimage/api.png";
import maintence from "../../assets/pnglogoimage/maintenance.png";
import application from "../../assets/pnglogoimage/application.png";

const Boxes = () => {
  return (
    <div className="container-fluid boxbg">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 ">
          <div className="col">
            <Boxcomponent logo={warning}
              text="Proactive Monitioring & maintenance" />
          </div>
          <div className="col">
            <Boxcomponent
              logo={maintence}
              text="Web App
              Maintenance"
            />
          </div>
          <div className="col">
            <Boxcomponent logo={solution}
              text="Incident Management
              and Resolution"/>
          </div>
          <div className="col">
            <Boxcomponent logo={speedtext}
              text="Performance
              Optimization"/>
          </div>
          <div className="col">
            <Boxcomponent logo={application}
              text="Application Security
              and Compliance"/>
          </div>
          <div className="col">
            <Boxcomponent logo={api}
              text="Regular
              Updates & Upgrades"/>
          </div>
          <div className="col">
            <Boxcomponent logo={setting}
              text="Application
              Integration"/>
          </div>
          <div className="col">
            <Boxcomponent logo={solution}
              text="Customized
              Support Plans"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boxes;
