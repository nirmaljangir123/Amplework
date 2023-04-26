import React from "react";
import { Accordion } from "react-bootstrap";
import { FrequentlyAsked } from "../../../mockup/Mockup";

const Frequently = () => {
  return (
   
      <div className="container">
        <div className="text-center">
          <h2 className="">Frequently Asked Questions</h2>
        </div>
        <div className="row pt-5">
          {FrequentlyAsked.map((varient, key) => (
            <div className="col-sm-12 col-md-6 my-2 ">
              <Accordion className="frenqhovers1">
                <Accordion.Item eventKey={varient.key}>
                  <Accordion.Header>
                    <p className="fw-semibold">{varient.text}</p>
                  </Accordion.Header>
                  <Accordion.Body>{varient.smalltext}</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Frequently;
