import React from "react";
import { Card } from "react-bootstrap";
import { CardsdataArrow } from "../../../mockup/Mockup";

const AppShape = () => {
  return (
    <section className="appshapebgcolor">
      <div className="container text-center">
        <h2 className="px-3">
          Let's get your app in shape - contact us now and let the maintenance
          magic begin
        </h2>

        <p className="px-5 pt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <div className="row justify-content-center pt-4">
          {CardsdataArrow.map((variant, key) => (
            <Card
              key={variant}
              style={{ width: "19rem" }}
              className="cardsborder1 text-center m-4 p-4"
            >
              <Card.Body className="cardbodyborder1">
                <div className="defaultshowdata11">
                  <div>
                    <img src={variant.black} alt="no pic" />
                  </div>
                  <Card.Title className="text-danger py-3">
                    {" "}
                    {variant.text}{" "}
                  </Card.Title>
                  <p className="">{variant.smalltext}</p>
                  <Card.Text className="text-primary">{variant.link}</Card.Text>
                </div>
                <div className="hoveronmouse">
                  <div>
                    <div>
                      <img
                        src={variant.target}
                        alt="no pic"
                        className="targethover"
                      />
                    </div>
                    <div>
                      <img
                        src={variant.white}
                        alt="no pic"
                        className="arrowhover"
                      />
                    </div>
                  </div>
                  <Card.Title className="text-warning py-3">
                    {" "}
                    {variant.text}{" "}
                  </Card.Title>
                  <Card.Text className="text-light">
                    {variant.smalltext}
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppShape;
