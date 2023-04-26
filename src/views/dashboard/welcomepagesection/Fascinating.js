import React from "react";
import { Card } from "react-bootstrap";
import { Fascinate } from "../../../mockup/Mockup";

const Fascinating = () => {
  return (
    <div className="container">
      <div className="text-center">
        <h2 className="pb-4">
          Fascinating Benefits of Application Maintenance and Support Services
        </h2>
        <p className="px-5">
          Time to empower your mind with the fascinating benefits of application
          maintenance and support services. So, get ready to empower your mobile
          application growth with these foremost benefits.
        </p>
      </div>
      <div className="row pt-4">
        {Fascinate.map((variant) => (
          <div className="col-sm-12 col-lg-6 mb-4">
            <Card key={variant} className="cardhovers1 p-3">
              <Card.Body>
                <div className="d-flex justify-content-between ">
                  <div className="">
                    <Card.Title>{variant.text}</Card.Title>
                    <Card.Text className="">{variant.smalltext}</Card.Text>
                  </div>
                  <div className="imagebgcolor1 align-self-center rounded p-3">
                    <Card.Img
                      src={variant.png}
                      alt="no pic"
                      className="imagefixed1"
                    />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fascinating;
