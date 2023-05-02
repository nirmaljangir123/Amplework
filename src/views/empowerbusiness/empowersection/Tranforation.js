import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../empowersection/Empowersection.css";

import { transsport } from "../../../mockup/EmployeeMock";

const Tranforation = () => {
  return (
    <div className="container">
      <div className="d-flex flex-wrap justify-content-center ">
        {transsport.map((varient, key) => (
          <Card style={{ width: "18rem" }} className="cardsonhover m-2">
            <Card.Body className=" text-center ">
              <div className=" defaulttransport">
                <div className="transimageblock">
                  <img src={varient.img} alt="" className="img-fluid p-2" />
                </div>
                <Card.Title className="py-2">{varient.text}</Card.Title>
              </div>
              <div className="transporthover">
                <Card.Title >{varient.text}</Card.Title >
                <p>{varient.smalltext}</p>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Tranforation;
