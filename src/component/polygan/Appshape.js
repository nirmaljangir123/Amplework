import React from "react";
import { AppcardsGroup } from "./AppsMaintaine";
import { CardGroup } from "react-bootstrap";
import { FiTarget } from "react-icons/fi";
import { Card } from "react-bootstrap";
import "../../component/polygan/Polygan.css";

const Cardsdata = [
  {
    icon: FiTarget(),
    text: "Fixed",
    smalltext:
      "Slow and glitch software updates with no-real benefits for users?.",
    link: "Amplework,s Solution",
  },
  {
    icon: FiTarget(),
    text: "issue",
    smalltext:
      "Slow and glitch software updates with no-real benefits for users?",
    link: "Amplework,s Solution",
  },
  {
    icon: FiTarget(),
    text: "issue",
    smalltext: "Need profound resources for program visibility?",
    link: "Amplework,s Solution",
  },
];

export const Appshape = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container text-center">
        <p className="fs-3 px-3">
          Let's get your app in shape - contact us now and let the maintenance
          magic begin
        </p>

        <p className="px-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <div className="row justify-content-center py-4">
          {Cardsdata.map((variant) => (
            <Card key={variant} style={{ width: "20rem" }} className="cardsborder text-center m-4 p-4">
              <Card.Body className="cardbodyborder">
                <h1>{variant.icon}</h1>
                <Card.Title className="icontitletext1"> {variant.text} </Card.Title>
                <Card.Text className="smalltext">{variant.smalltext}</Card.Text>
                <Card.Text className="linktext">{variant.link}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
