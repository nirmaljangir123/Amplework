import React from "react";
import Card from "react-bootstrap/Card";

import { AllApps } from "../../../mockup/Apps";

const BrandsCollabrate = () => {
  return (
    <div className="container">
      <div className="text-center">
        <h2>Brands we've collaborated with</h2>
        <p>
          Our track record of collaborating with various brands speaks to our
          exceptional process-driven methodology and unparalleled technical
          know-how. You can trust Mindbowser to deliver top-notch results.
        </p>
      </div>
      <div className="row align-items-center">
        {AllApps.map((varient, key) => (
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-2 ">
            <Card className="border m-2">
            <Card.Body>
              <img src={varient.app} className="img-fluid"/>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsCollabrate;
