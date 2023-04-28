import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
// images
import time from "../../../assets/pnglogoimage/partTime.png";
import fulltime from "../../../assets/pnglogoimage/hourglass.png";
import hours from "../../../assets/pnglogoimage/calendar.png";
import access from "../../../assets/pnglogoimage/Accessibility.png";
import adapt from "../../../assets/pnglogoimage/Adaptability.png";
import scale from "../../../assets/pnglogoimage/Scalability.png";
import amplelogo from "../../../assets/logo/amplworkLogo.png";
// import { aws, dbregister, googlecloud, iso } from "../../assets/pnglogoimage";
import aws from "../../../assets/pnglogoimage/aws-consulting-partner.png";
import iso from "../../../assets/pnglogoimage/iso.png";
import googlecloud from "../../../assets/pnglogoimage/google-cloud-partner.png";
import dbregister from "../../../assets/pnglogoimage/d-b-register.png";

import { Button } from "react-bootstrap";
import "../footersection/FooterSection.css";
import { CardBody } from "reactstrap";

const FooterBlock = () => {
  return (
    <section className="footerbgcolor">
      <div className="container">
        <CardGroup className="border border-1">
          <Card className="">
            <Card.Body className="blockblue ">
              <div className="blockbluetext">
                <h3 className="py-2">
                  Do you want to hire resources for your project?
                </h3>
                <Card.Text>
                  We have been working with startups since our inception and
                  help them scale as they grow. Our experience can help you
                  refine your business ideas and get into the market asap.
                </Card.Text>
                <div className=" w-75 d-flex justify-content-between text-center">
                  <div className="m-1 ">
                    <img
                      src={time}
                      height={90}
                      alt="on"
                      className="bg-light  p-3 rounded-4"
                    />
                    <p>Part-time</p>
                  </div>
                  <div className="m-1">
                    <img
                      src={fulltime}
                      height={90}
                      alt="sa"
                      className="bg-light p-3 rounded-4"
                    />
                    <p>Full-time</p>
                  </div>
                  <div className="m-1">
                    <img
                      src={hours}
                      height={90}
                      alt="sa"
                      className="bg-light p-3 rounded-4"
                    />
                    <p>Hourly</p>
                  </div>
                </div>
                <div>
                  <Button
                    variant="primary"
                    className="rounded-4 px-4 text-light"
                  >
                    Explore more
                  </Button>{" "}
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className=" bg-transparent ">
            <Card.Body>
              <div className="transcard">
                <h3 className="py-2">
                  Do you want to hire resources for your project?
                </h3>
                <Card.Text>
                  We have been working with startups since our inception and
                  help them scale as they grow. Our experience can help you
                  refine your business ideas and get into the market asap.
                </Card.Text>
                <div className=" w-75 d-flex justify-content-between text-center">
                  <div className="m-1 ">
                    <img
                      src={time}
                      height={90}
                      alt="on"
                      className="bg-light  p-3 rounded-4"
                    />
                    <p>Part-time</p>
                  </div>
                  <div className="m-1">
                    <img
                      src={fulltime}
                      height={90}
                      alt="sa"
                      className="bg-light p-3 rounded-4"
                    />
                    <p>Full-time</p>
                  </div>
                  <div className="m-1">
                    <img
                      src={hours}
                      height={90}
                      alt="sa"
                      className="bg-light p-3 rounded-4"
                    />
                    <p>Hourly</p>
                  </div>
                </div>
                <div>
                  <Button
                    variant="primary"
                    className="rounded-4 px-4 text-light"
                  >
                    Explore more
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </CardGroup>
        <div className="row pt-5">
          <div className="col-sm-12 col-lg-5">
            <img
              src={amplelogo}
              alt="no pic"
              width="400px"
              className="img-fluid"
            />
          </div>
          <div className=" col-lg-7 text-center">
            <div className="row text-light ">
              <div className="col-sm-12  col-md-6 col-lg-6 d-flex m-auto">
                <div>
                  <img
                    src={iso}
                    alt="no pic"
                    // width={120}
                    className="img-fluid"
                  />
                  <p className=" fw-bold"> ISO-27001 software security</p>
                </div>
                <div>
                  <img
                    src={dbregister}
                    alt="no pic"
                    // width={120}
                    className="img-fluid"
                  />
                  <p className=" fw-bold">Dun & broadcast Varified</p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6  col-lg-6 d-flex m-auto">
                <div>
                  <img
                    src={googlecloud}
                    alt="no pic"
                    // width={120}
                    className="img-fluid"
                  />
                  <p className=" fw-bold">Google cloud partner</p>
                </div>
                <div>
                  <div className="">
                    <img
                      src={aws}
                      alt="no pic"
                      // width={120}
                      className="img-fluid"
                    />
                    <p className="fw-bold">Aws consaulting partner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterBlock;
