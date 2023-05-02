import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Roi } from "../../mockup/EmployeeMock";
import "../cards/mobilitycards.css";
import { Button } from "react-bootstrap";

const RoiCards = () => {
  return (
    <div className="row ">
      {Roi.map((varient, key) => (
        <div className="col-md-6 col-lg-4 ">
          <Card className="notchedcorner rounded-0">
            <Card.Body className="bodynotchcolor">
              {/* <ul className="liststyleimage">
                <li className=" ">
                  <Card.Title>{varient.text}</Card.Title>
                </li>
              </ul> */}
              <Card.Title className="bottomborderincrese">
                <img src={varient.logo} />
                <span className="textleftpadding">{varient.text}</span>{" "}
              </Card.Title>

              <Card.Text className="">{varient.smalltext}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default RoiCards;
