import React from "react";
import maintenance from "../../assets/pnglogoimage/maintenance.png";
import Card from "react-bootstrap/Card";
import "../Boxset/box.css";
const Boxcomponent = (props) => {
  const { logo, text } = props;
  console.warn("----->props");
  return (
    <>
      <div className="positionset ">
        <div className="firstbox">
          <Card style={{ width: "16rem" }} className="cheak my-2 p-3">
            <Card.Body className="">
              <Card.Title className="">
                <img src={props.logo} alt="no pic" width={40} />
              </Card.Title>
              <Card.Subtitle className="subtitletext ">
                {props.text}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </div>
        <div className="secondbox">
          <Card style={{ width: "18rem" }} className="yes">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Boxcomponent;
