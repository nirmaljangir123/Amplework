import React from "react";
import MobilityCards from "../../../component/cards/MobilityCards";
import skill from "../../../assets/opicityimage/skill.png";
import iteration from "../../../assets/opicityimage/iteration.png";
import standrad from "../../../assets/opicityimage/turn.png";
import zero from "../../../assets/opicityimage/secure-data.png";
import realtime from "../../../assets/opicityimage/tool.png";
import { CardGroup } from "react-bootstrap";

const InnovateFeature = () => {
  return (
    <div className="container text-center">
      <h2>Experience Innovate Features of Enterprise Mobility Solutions</h2>

      <p className="">
        We are the leading enterprise mobile app development agency & we support
        companies into transforming their business operations. We encourage
        businesses to adopt advanced mobility solutions so that they can travel
        in the boat of digital transformations.
      </p>
      <div className="row bg-danger">

        <div className="col-sm-12 col-lg-4">
          <MobilityCards
            img={skill}
            text="5x Efficiency Improvement"
            smalltext="Our solutions can help improve efficiency by up to 5x times that resulting in reduced costs and increased productivity."
            bgcolor="rgb(245,164,3)"
            size="150"
          />
        </div>
        <div className="col-sm-12 col-lg-8">
          <div className="row ">
            
            <div className="col-sm-12 col-lg-6">
              <MobilityCards
                img={iteration}
                text="5x Efficiency Improvement"
                smalltext="Our solutions can help improve efficiency by up to 5x times that resulting in reduced costs and increased productivity."
                bgcolor="rgb(40,167,169)"
              />
            </div>
            <div className="col-sm-12 col-lg-6">
              <MobilityCards
                img={standrad}
                text="5x Efficiency Improvement"
                smalltext="Our solutions can help improve efficiency by up to 5x times that resulting in reduced costs and increased productivity."
                bgcolor="rgb(0,152,249)"
              />
            </div>
            <div className="col-sm-12 col-lg-6">
              <MobilityCards
                img={zero}
                text="5x Efficiency Improvement"
                smalltext="Our solutions can help improve efficiency by up to 5x times that resulting in reduced costs and increased productivity."
                bgcolor="rgb(141,0,168)"
              />
            </div>
            <div className="col-sm-12 col-lg-6">
              <MobilityCards
                img={realtime}
                text="5x Efficiency Improvement"
                smalltext="Our solutions can help improve efficiency by up to 5x times that resulting in reduced costs and increased productivity."
                bgcolor="rgb(255,0,128)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovateFeature;
