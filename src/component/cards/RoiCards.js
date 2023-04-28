import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Roi } from "../../mockup/EmployeeMock";
import "../cards/mobilitycards.css";

const RoiCards = () => {
  return (
    <Row sm={1} md={2} lg={3} className="g-4">
      {Roi.map((varient, idx) => (
        <Col>
          <Card className=" rounded-0">
            <div className="notchedcorner">
              <Card.Body>
                <div className="d-flex">
                  <img src={varient.logo} alt="no" width={20} />
                  <h5 className="wordspacingcards">{varient.text}</h5>
                </div>
                <hr className="w-50 border-4 text-primary" />
                <Card.Text className="textflexstart">
                  {varient.smalltext}
                </Card.Text>
              </Card.Body>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default RoiCards;
