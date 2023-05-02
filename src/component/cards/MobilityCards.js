import React from "react";
import Card from "react-bootstrap/Card";
import "../cards/mobilitycards.css";
const MobilityCards = (props) => {
  const { img, text, smalltext, bgcolor, size } = props;
  return (
    <Card
      style={{
        backgroundColor: props.bgcolor,
        color: "white",
        height: "100%",
      }} className=""
    >
      <Card.Body className="textcolor">
        <div className="imageposition">
          <img src={props.img} alt="no pic" width={props.size} />
        </div>
        <Card.Title className="textposition">{props.text}</Card.Title>
        <Card.Text className="smalltextposition">{props.smalltext}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default MobilityCards;
