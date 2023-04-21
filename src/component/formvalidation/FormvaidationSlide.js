import React from "react";

// images
import ken from "../../assets/Developerphotos/ken_murai.png";
import pngwing from "../../assets/pnglogoimage/pngwing.png";
import pksir from "../../assets/Developerphotos/pksir.png";
import sksir from "../../assets/Developerphotos/sksir.png";
import supermaam from "../../assets/Developerphotos/novamaam.png";

// validation
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "../../component/formvalidation/Formvalid.css";

import Carousel from "react-bootstrap/Carousel";

// icons
import { BiGame, BiMessageAltDots, BiSupport } from "react-icons/bi";
import { MdWifiCalling1, MdGroups } from "react-icons/md";
import { BsCurrencyDollar, BsPlusCircle, BsStopwatch } from "react-icons/bs";
import { FcManager } from "react-icons/fc";
import { TiPointOfInterestOutline } from "react-icons/ti";
import { Button, Card } from "react-bootstrap";
import { QuickStart, overflowimage } from "../../views/welcomepage/Mockup";
import { RiBarChartGroupedLine, RiStarHalfLine } from "react-icons/ri";
import {
  IoLogoAppleAppstore,
  IoIosPlayCircle,
  IoBugOutline,
} from "react-icons/io";
import {
  GrIteration,
  GrStorage,
  GrTestDesktop,
  GrSettingsOption,
  GrDocumentPerformance,
  GrTechnology,
  GrDocumentTest,
  GrSystem,
  GrCloudSoftware,
  GrVirtualMachine,
  GrGooglePlay,
  GrAppleAppStore,
  GrApple,
  GrOptimize,
} from "react-icons/gr";

const FormvaidationSlide = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-lg-6 p-5">
          <h3 className="py-2">Prepare yourself for a quick response</h3>
          <Form>
            <Row>
              <Form.Group as={Col} md="6">
                <InputGroup
                  className="mb-4"
                  style={{ borderBottom: "2px solid rgb(245, 164, 3)" }}
                >
                  <InputGroup.Text
                    className="bg-light"
                    style={{ border: "none", color: "rgb(245, 164, 3)" }}
                  >
                    {FcManager()}
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Name *"
                    className=" formfieldcolor "
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col} md="6">
                <InputGroup
                  className="mb-4"
                  style={{ borderBottom: "2px solid rgb(245, 164, 3)" }}
                >
                  <InputGroup.Text
                    className="bg-light"
                    style={{ border: "none", color: "rgb(245, 164, 3)" }}
                  >
                    {BiMessageAltDots()}
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Email Address *"
                    className="formfieldcolor"
                  />
                </InputGroup>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} md="6">
                <InputGroup
                  className="mb-4"
                  style={{ borderBottom: "2px solid rgb(245, 164, 3)" }}
                >
                  <InputGroup.Text
                    className="bg-light"
                    style={{ border: "none", color: "rgb(245, 164, 3)" }}
                  >
                    {MdWifiCalling1()}
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Phone number *"
                    className=" formfieldcolor"
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col} md="6">
                <InputGroup
                  className="mb-4"
                  style={{ borderBottom: "2px solid rgb(245, 164, 3)" }}
                >
                  <InputGroup.Text
                    className="bg-light"
                    style={{ border: "none", color: "rgb(245, 164, 3)" }}
                  >
                    {TiPointOfInterestOutline()}
                  </InputGroup.Text>
                  <Form.Select className="formfieldcolor">
                    <option>Interested In*</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} md="6">
                <InputGroup
                  className="mb-4"
                  style={{ borderBottom: "2px solid rgb(245, 164, 3)" }}
                >
                  <InputGroup.Text
                    className="bg-light"
                    style={{ border: "none", color: "rgb(245, 164, 3)" }}
                  >
                    {BiMessageAltDots()}
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Skype Id/WhatsApp No. *"
                    className=" formfieldcolor"
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col} md="6">
                <InputGroup
                  className=""
                  style={{ borderBottom: "2px solid rgb(245, 164, 3)" }}
                >
                  <InputGroup.Text
                    className="bg-light"
                    style={{ border: "none", color: "rgb(245, 164, 3)" }}
                  >
                    {TiPointOfInterestOutline()}
                  </InputGroup.Text>

                  <Form.Select className="formfieldcolor">
                    <option>Select Your Budget</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="mt-2 mb-4">
              <Form.Group>
                <Form.Label
                  className="formfieldcolor"
                  style={{ fontFamily: "monospace" }}
                >
                  <span className="text-warning px-1">
                    {BiMessageAltDots()}
                  </span>
                  MESSAGE*
                </Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Row>
            <Row className="my-5">
              {/* <div className="text-primary fs-6 ">
                    {BsPlusCircle()} ADD FILE
                  </div> */}
              <div className="col-sm-8 col-lg-4">
                <Form.Label className="text-primary px-1 fw-semibold">
                  <span>{BsPlusCircle()}</span> ADD FILE*
                </Form.Label>
              </div>
              <div className="col-sm-12 col-lg-8 ">
                <Form.Check>
                  <Form.Check.Input />
                  <Form.Check.Label>
                    Yes, Send me a mutual NDA ( Non-Disclosure Agreement )
                  </Form.Check.Label>
                </Form.Check>
              </div>
            </Row>
            <Row>
              <div className="row justify-content-between text-center ">
                <div className="col-sm-12 col-lg-6">
                  <Card className="recaptchshadow">
                    <Card.Body className="d-flex justify-content-between">
                      <Form.Check className="">
                        <Form.Check.Input className="" />
                        <Form.Check.Label>I'm not a robot</Form.Check.Label>
                      </Form.Check>
                      {/* <Button variant="warning" className="text-light">Send Your Inquiry</Button>{' '} */}
                      <img
                        src={pngwing}
                        alt=""
                        className="img-fluid"
                        width="10%"
                      />
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-sm-12 col-lg-4 mt-3">
                  <Button variant="warning" className="text-light">
                    Send Your Inquiry
                  </Button>{" "}
                </div>
              </div>
            </Row>
          </Form>
        </div>
        {/* MdWifiCalling1,BsCurrencyDollar,FcManager,TiPointOfInterestOutline,GiCheckMark, BiMessageDetail, BiMessageAltDots */}

        <div
          className="col-sm-12 col-lg-6 text-light p-5"
          style={{ backgroundColor: "rgb(6,19,100)" }}
        >
          <h4 className="pb-3">Quick Statsx</h4>
          <div className="row justify-content-between ">
            <div className="col-sm-12 col-md-5 ">
              <div className="">
                <h2 className="text-warning">
                  170+{" "}
                  <span className="text-light">{RiBarChartGroupedLine()}</span>
                </h2>
              </div>
              <div>
                <p className="fw-semibold">Successful projects</p>
              </div>
              {/* GrOptimize, IoBugOutline, BsStopwatch, BiSupport, MdGroups; */}
            </div>
            <div className="col-sm-12 col-md-5">
              <div className="">
                <h2 className="text-warning">
                  92% + <span className="text-light">{MdGroups()}</span>
                </h2>
              </div>
              <div>
                <p className="fw-semibold">Client retention</p>
              </div>
              {/* GrOptimize, IoBugOutline, BsStopwatch, BiSupport, MdGroups; */}
            </div>
            <div className="col-sm-12 col-md-5 pb-3">
              <div className="d-flex">
                <h2 className="text-warning">
                  $200M+ <span className="text-light">{RiStarHalfLine()}</span>
                </h2>
              </div>
              <div>
                <p className="fw-semibold">Client retention</p>
              </div>
              {/* GrOptimize, IoBugOutline, BsStopwatch, BiSupport, MdGroups; */}
            </div>
            <div className="col-sm-12 col-md-5 pb-3">
              <div className="d-flex">
                <h2 className="text-warning">
                  92% + <span className="text-light">{BsStopwatch()}</span>
                </h2>
              </div>
              <div>
                <p className="fw-semibold">Client retention</p>
              </div>
              {/* GrOptimize, IoBugOutline, BsStopwatch, BiSupport, MdGroups; */}
            </div>
          </div>
          <h3 className="pb-5">Top Executives</h3>
          <div className="overflowclass ">
            <div className="text-center">
              <img
                src={pksir}
                alt=""
                width="230px"
                height="200px"
                className="paddingoverflow"
              />
              <p>
                Santosh Singh <br /> CEO
              </p>
            </div>
            <div className="text-center">
              <img
                src={sksir}
                alt=""
                width="230px"
                height="200px"
                className="paddingoverflow "
              />
              <p>
                Prakash Saini <br /> CTO
              </p>
            </div>
            <div className="text-center">
              <img
                src={supermaam}
                alt=""
                width="230px"
                height="200px"
                className="paddingoverflow "
              />
              <p>
                Supernova <br /> CXO
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormvaidationSlide;
