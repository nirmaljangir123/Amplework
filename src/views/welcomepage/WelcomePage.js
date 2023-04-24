import React from "react";
import { Button, Card, FormGroup } from "react-bootstrap";
import "../welcomepage/welcomepage.css";
import { TopNavbar, Welcome } from "../../component";
// import Ploygan from "../../component/polygan/Ploygan";
import Footer from "../footer/Footer";
// png bg image
import home from "../../assets/pnglogoimage/homebgimage.jpg";
import laptopman from "../../assets/pnglogoimage/laptopman.png";
import franqbg from "../../assets/pnglogoimage/frenqutelybg.png";
import groupimage from "../../assets/pnglogoimage/groupbgimage.png";
import linkdin from "../../assets/Developerphotos/linkdinCeo.png";
import Iars from "../../assets/Developerphotos/lars_platzdasch.png";
import ken from "../../assets/Developerphotos/ken_murai.png";
import imo from "../../assets/Developerphotos/imo_etuk.png";
import shokesbgimage from "../../assets/pnglogoimage/shokesbgimage.png";
import shokesimage from "../../assets/pnglogoimage/shokesimage.png";
import overview from "../../assets/pnglogoimage/overview.svg";
import softwareapplicaton11 from "../../assets/pnglogoimage/software-application11.png";
import outline11 from "../../assets/pnglogoimage/OUTLINE11.png";
import datatranfer11 from "../../assets/pnglogoimage/data-transfer11.png";

// opicity image
import cheak from "../../assets/opicityimage/cheak.png";
import anti from "../../assets/opicityimage/anti.png";
import good from "../../assets/opicityimage/good.png";
import layer from "../../assets/opicityimage/layer.png";
import remote from "../../assets/opicityimage/remotecontrol.png";
import support from "../../assets/opicityimage/support.png";
import version from "../../assets/opicityimage/version.png";

// images
import groupsetting from "../../assets/imges/groupsetting.png";
import grouppc from "../../assets/imges/grouppc.png";
import groupanti from "../../assets/imges/groupanti.png";
import grouptop from "../../assets/imges/grouptop.png";
import groupsqure from "../../assets/imges/groupsqure.png";
import groupphone from "../../assets/imges/groupphone.png";
import groupchip from "../../assets/imges/groupchip.png";
import groupgames from "../../assets/imges/groupgames.png";
// cards component import
import Cards from "../";
import CardGroup from "react-bootstrap/CardGroup";

// carsole component
import Carousel from "react-bootstrap/Carousel";
// form validation
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
// cards react icon
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
import CardsComponent, {
  AppcardsGroup1,
  NumberSpeak,
} from "../../component/Boxset/Card";
import Apparrow from "../../assets/pnglogoimage/Apparrow.png";
import { IoLogoAppleAppstore, IoIosPlayCircle } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";

import {
  BsBug,
  BsCheck2Circle,
  BsCheck2All,
  BsArrowUpRight,
  BsStopwatch,
} from "react-icons/bs";
import { BiSupport, BiMessageDetail, BiMessageAltDots } from "react-icons/bi";
import { MdOutlineSettingsRemote, MdGroups } from "react-icons/md";
import { GiCoolSpices, GiCheckMark } from "react-icons/gi";
import { MdOutlineAppShortcut, MdWifiCalling1 } from "react-icons/md";
import { SiAzuredataexplorer } from "react-icons/si";
import { RiApps2Fill } from "react-icons/ri";
import { SlGameController } from "react-icons/sl";
import { ImCompass } from "react-icons/im";
import { FcOk } from "react-icons/fc";
import { AiFillLinkedin, AiOutlineAppstoreAdd } from "react-icons/ai";
import {
  BsGooglePlay,
  BsCurrencyDollar,
  BsShop,
  BsShieldMinus,
} from "react-icons/bs";
import { FcManager } from "react-icons/fc";
import { TiPointOfInterestOutline } from "react-icons/ti";
import { HiOutlineMailOpen } from "react-icons/hi";

import {
  FcSmartphoneTablet,
  FcTabletAndroid,
  FcPhoneAndroid,
  FcMultipleSmartphones,
  FcIpad,
  FcOrgUnit,
} from "react-icons/fc";
import { FiTarget } from "react-icons/fi";
import { Fa500Px, FaBuffer } from "react-icons/fa";
//  component
import {
  Buttondata,
  FranqButton,
  MyButton,
  franqbutton,
} from "../../component/button/Button";
import homebgimage from "../../assets/pnglogoimage/homebgimage.jpg";
import { VscVersions } from "react-icons/vsc";
import { AppcardsGroup } from "../../component/Boxset/Card";
import Accordion from "react-bootstrap/Accordion";

// mockup map
import {
  Active,
  Cardsdata,
  CardsdataArrow,
  Digitalize,
  Fascinate,
  FrequentlyAsked,
  Maintain,
  Topmove,
  TrustedDeveloper,
} from "./Mockup";
import FormvaidationSlide from "../../component/formvalidation/FormvaidationSlide";

// import css
const WelcomePage = () => {
  return (
    <>
      <div className="page-containe">
        <section
          className="classmantaience"
          style={{
            backgroundImage: `Url(${home} )`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            paddingTop: "0px",
          }}
        >
          <TopNavbar />

          <div className="container pt-5">
            <div className=" row text-center">
              <p
                className="text-uppercase text-warning text-center fw-semibold"
                style={{ letterSpacing: "3px" }}
              >
                {" "}
                Application mantainance and support
              </p>
              <h1 className="text-light">
                Top classs application mantainace and support service for
                error-free, hight-performing applications
              </h1>
            </div>
            <div className="text-center pt-5">
              <Button variant="warning" className="fw-semibold px-3">
                Schdule a call
              </Button>
            </div>
          </div>
        </section>

        {/* section 222222222222 */}
        <section>
          <div className="container">
            <div className="row d-lg-flex ">
              <div className="col-sm-12 col-lg-6 text-center">
                <img
                  src={overview}
                  alt="no pic"
                  width={400}
                  className="img-fluid"
                />
              </div>

              <div className="col-sm-12 col-lg-6 pt-4">
                <h5
                  className="text-primary fw-bold"
                  style={{ letterSpacing: "4px" }}
                >
                  AMPLEWORK SOFTWARE
                </h5>
                <h4 className="py-2">
                  {" "}
                  Your Dedicated Supporter for All Maintenance Services
                </h4>

                <p className="">
                  We are a leading tech company in offering digital solutions to
                  hundreds of clients across the globe. Our team of developers
                  exhibits a wide range skills and expertise that help in
                  delivering high quality digital solutions to meet your
                  <br />
                  business requirements. Our approach and software development
                  strategies are well tested and suitable in ensuring that your
                  idea is turned into a working solution in a timely manner.
                  <br />
                  business requirements. Our approach and software development
                  strategies are well tested and suitable in ensuring that your
                  idea is turned into a working solution in a timely manner.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* section 33333333333333 */}

        <section className="experiencebgcolor">
          <div className="container">
            <div className="text-center">
              <h2 className="px-4">
                Experience Unparalleled Excellence With Our Comprehensive
                Application Support and Maintenance.
              </h2>

              <p className="paddingbottom pt-4">
                our advanced mobile application maintenance and Support provide
                a Comprehensive approach to managing and maintaining your
                application.
              </p>
            </div>
          </div>
        </section>

        {/* setion 33333333444444444 */}

        {/* <section className="pt-0">
          <div className="container">
            <div className="row ">
              {Topmove.map((varient, key) => (
                <div className="col-sm-12 col-md-6 col-lg-3">
                  <div key={varient} className="text-center m-1 border">
                    <h1>{varient.icon}</h1>
                    <div>
                      <h4>{varient.text}</h4>
                      <p>{varient.smalltext}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* section 44444444    Advanced Application Support  */}
        <section>
          <div className="container text-center">
            <h2 className=" px-2">
              Our Advanced Application Support Service - Elevate Your
              Application's Performance
            </h2>
            <p className=" px-5 py-4">
              Complex applications which are configured with the latest APIs
              require the advanced solutions to keep the working mechanism of
              the applications in a perfect shape. At Amplework,
            </p>
            <div>
              <CardGroup>
                <CardsComponent
                  data={softwareapplicaton11}
                  text="Application Re-engineering"
                  smalltext="Our developers evaluate existing applications through a series ofin-house testing processes in order to evaluate the functionalities ofthe applications that need to be re-engineered"
                />
                <CardsComponent
                  data={outline11}
                  text="Application Migration & Integration"
                  smalltext="Our engineers are profound in supporting you for moving applications from physical or local settings to remote based servers. We also provide application migration as well as integration services."
                />
                <CardsComponent
                  data={datatranfer11}
                  text="Application Support"
                  smalltext="It includes a range of activities for ensuring proper functioning and optimization of a web or mobile application. We focus towards continuous monitoring and continuous improvement of functions."
                />
              </CardGroup>
            </div>
            <div className="pt-4">
              <MyButton text="Get a Free Quote" color="#fff" />
            </div>
          </div>
        </section>

        {/* section 5555555555   Targeted Activities   */}
        <section className="activtiesbgcolor">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-lg-6 pt-4">
                <h3 className="pb-3">
                  Amplework's Targeted Activities For Application Maintenance
                  Support Services
                </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
                <ul className="px-3 ulcolorchange">
                  <li>Amplework offers hire.</li>
                  <li>dedicated Full Stack.</li>
                  <li>developers who possess.</li>
                </ul>
              </div>
              <div className="col-sm-12 col-lg-6">
                <div className="row">
                  {Active.map((varient, key) => (
                    <div className="col-sm-12 col-md-6">
                      <div className="d-flex my-3 ">
                        <div
                          className="iconshadow p-3 rounded border border-1"
                          style={{
                            backgroundColor: varient.bgcolor,
                            boxShadow: varient.backbgcolor,
                          }}
                        >
                          <img
                            src={varient.logo}
                            alt="no pic "
                            className="img-fluid"
                          />
                        </div>
                        <div className="align-text-center">
                          <p className="px-5">{varient.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* section 6666666666666666666 */}
        <section>
          <div className="container">
            <div className="text-center">
              <p
                className="text-uppercase text-warning text-center fw-semibold"
                style={{ letterSpacing: "3px" }}
              >
                Keep Your Applications Always Shine
              </p>
              <h2>Types of Apps We Maintain At Amplework Software</h2>
              <p className="px-5 py-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <div className="d-flex flex-wrap justify-content-center ">
              {Maintain.map((varient, key) => (
                <Card
                  style={{ width: "18rem" }}
                  className="mx-2 my-3 cardshover"
                >
                  <Card.Body className="text-center ">
                    <div className="defaultshowdata ">
                      <div className="imagedivheight">
                        <img
                          src={varient.icon}
                          alt=""
                          className=" mx-auto img-fluid"
                        />
                      </div>
                      <Card.Title className=" pt-2">{varient.text}</Card.Title>
                    </div>

                    <div className="hovershowdata text-light">
                      <p className=" fs-5">{varient.text}</p>
                      <p className="">{varient.smalltext}</p>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* section 777777777777  Let's get your app in shape - contact us now and let the maintenance magic begin */}
        <section className="appshapebgcolor">
          <div className="container text-center">
            <h2 className="px-3">
              Let's get your app in shape - contact us now and let the
              maintenance magic begin
            </h2>

            <p className="px-5 pt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
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
                      <Card.Text className="text-primary">
                        {variant.link}
                      </Card.Text>
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

        {/* section 888888888888   Fascinating Benefits of Application Maintenance and Support Services*/}
        <section className="fasinatebgcolor">
          <div className="container">
            <div className="text-center">
              <h2 className="pb-4">
                Fascinating Benefits of Application Maintenance and Support
                Services
              </h2>
              <p className="px-5">
                Time to empower your mind with the fascinating benefits of
                application maintenance and support services. So, get ready to
                empower your mobile application growth with these foremost
                benefits.
              </p>
            </div>
            <div className="row pt-4">
              {Fascinate.map((variant) => (
                <div className="col-sm-12 col-lg-6 mb-4">
                  <Card key={variant} className="cardhovers1 p-3">
                    <Card.Body>
                      <div className="d-flex justify-content-between ">
                        <div className="">
                          <Card.Title>{variant.text}</Card.Title>
                          <Card.Text className="">
                            {variant.smalltext}
                          </Card.Text>
                        </div>
                        <div className="imagebgcolor1 align-self-center rounded p-3">
                          <Card.Img
                            src={variant.png}
                            alt="no pic"
                            className="imagefixed1"
                          />
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* section 999999999999999999 */}
        <section className="numberbgcolor">
          <div className="container">
            <div className="text-center">
              <h2 className="">
                Our Numbers Speaks For Our Business Operations
              </h2>
              <p className="px-5">
                We don't compromise on the quality aspects thus it makes us the
                leading application development maintenance and support service
                provider. We resolve even the most severe incidents in less than
                8 hours.
              </p>
              <div className="row ">
                <div className="col-sm-12 col-md-6 col-lg-3">
                  <NumberSpeak
                    bluetext="10-15 Mins"
                    text="Minimum Incident Response Time"
                  />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                  <NumberSpeak
                    bluetext="2-3 Hours"
                    text="insident solution Time"
                  />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                  <NumberSpeak bluetext="350+" text="Powress Team Member" />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                  <NumberSpeak
                    bluetext="100%"
                    text="With Quality Optimization"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section 1001010010010101 */}
        <section className="freaqbgcolor">
          <div className="container">
            <div className="text-center">
              <h2 className="px-5 pb-5">
                Are you searching for a dedicated technology partner, not just a
                service provider?
              </h2>
            </div>
            <div className="row ">
              <div className="col-sm-12 col-md-7">
                <p style={{ letterSpacing: "1px", lineHeight: "1.8" }}>
                  Our clients generated more than $50 million in revenues by
                  creating seamless mobile applications that run without any
                  bugs or glitches. Thus, we continue to upgrade our services to
                  support clients in generating higher revenue for operations.
                </p>
                <div className="">
                  <div className="d-flex">
                    <div>
                      <BsCheck2Circle className="BsCheck2Circle1" />
                    </div>
                    <div className="px-2 fw-semibold">
                      <p> Personalized business services.</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div>
                      <BsCheck2Circle className="BsCheck2Circle1" />
                    </div>
                    <div className="px-2 fw-semibold">
                      <p> Advanced practices for DevOps. .</p>
                    </div>
                  </div>{" "}
                  <div className="d-flex">
                    <div>
                      <BsCheck2Circle className="BsCheck2Circle1" />
                    </div>
                    <div className="px-2 fw-semibold">
                      <p> Proficiency in AI/ML/Blockchain Solutions.</p>
                    </div>
                  </div>{" "}
                  <div className="d-flex">
                    <div>
                      <BsCheck2Circle className="BsCheck2Circle1" />
                    </div>
                    <div className="px-2 fw-semibold">
                      <p> Exclusive support for digital transformation.</p>
                    </div>
                  </div>{" "}
                  <div className="d-flex">
                    <div>
                      <BsCheck2Circle className="BsCheck2Circle1" />
                    </div>
                    <div className="px-2 fw-semibold">
                      <p> Large scale & complex app building.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-5">
                <img src={laptopman} alt="no pic" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>
        {/*section 11 11 11 11 11 11 11 11 11  */}
        <section
          className=""
          style={{
            backgroundImage: `Url(${franqbg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
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
        </section>

        {/* section 121212121232212 */}
        <section className="dedicatedbgcolor">
          <div className="container">
            <div>
              {/* <img src={groupimage} alt="no p ic" className="img-fluid"/> */}
              <div
                style={{
                  backgroundImage: `Url(${groupimage})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                  borderRadius: "20px",
                }}
                className="row p-4 text-light justify-content-end"
              >
                <div className="col-sm-12 col-md-7">
                  <h2>Dedicated Full-stack developer?</h2>
                  <p>
                    Let's Discuss Your Project how we will transform your idea
                    into an amazing digital product?
                  </p>
                </div>

                <div className="col-sm-12 col-md-5 align-self-center text-center">
                  <FranqButton
                    varient="primary"
                    data="Get 2 Week Free Trial"
                    logo={ImCompass()}
                  />
                </div>
              </div>
            </div>
            <div className="text-center">
              <h2 className="pt-5 pb-3">Trusted and Skilled Developer</h2>
              <p>
                Our developers are ready to join your team and build amazing
                mobile & web apps.
              </p>
              <div className="px-5 ">
                <div className="row px-5 ">
                  {TrustedDeveloper.map((Developer, key) => (
                    <div className="col-sm-12 col-md-6 col-lg-3 p-3">
                      <div>
                        <img
                          src={Developer.img}
                          alt="no pic"
                          className="trustedboxshadow img-fluid border border-3"
                          style={{ borderRadius: "30% 0% 30% 0%" }}
                        />
                      </div>
                      <div
                        className=" text-dark fw-bold position-sticky"
                        style={{
                          marginTop: "-25px",
                          backgroundColor: "rgb(205,206,15)",
                          width: "75%",
                          borderRadius: "10px",
                        }}
                      >
                        <p className="">
                          {Developer.name}
                          <span>{FcOk()}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* section 131313133331  Prowdalyshowcase */}
        <section className="prowdbgcolor">
          <div className="container text-center">
            <h2 className="">We Proudly Showcase - Our Client Appreciations</h2>
            <Carousel>
              <Carousel.Item interval={1000}>
                <div className="row  pt-5">
                  <div className="col-sm-12 col-lg-6 pt-5 pb-3 px-5">
                    <div className="linkdinborder " style={{ width: "90%" }}>
                      <img
                        className="linkdinimageshadow img-fluid "
                        src={linkdin}
                        style={{
                          position: "relative",
                          top: "-40px",
                          left: "-70px",
                          borderRadius: "15PX",
                          width: "95%",
                          marginLeft: "30px",
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-lg-6">
                    <h5 className="py-4">
                      Amplework is a great team to work with, highly
                      recommended.
                    </h5>
                    <p>
                      Flawless Plank was an AI based fitness application and we
                      are glad we get a chance to work on this project with
                      Amplework. They have excellent skills in building mobile
                      apps and willing to work around issues to solve them ..
                      Highly Recommended!
                    </p>
                    <h5 className="pt-5">MANU NAMBOODIRI</h5>
                    <p>Founder, Flawless Plank</p>

                    <h3 className="text-primary">{AiFillLinkedin()}</h3>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <div className="row  pt-5">
                  <div className="col-sm-12 col-lg-6 pt-5 pb-3 px-5">
                    <div className="linkdinborder " style={{ width: "90%" }}>
                      <img
                        className="linkdinimageshadow img-fluid "
                        src={Iars}
                        style={{
                          position: "relative",
                          top: "-40px",
                          left: "-70px",
                          borderRadius: "15PX",
                          width: "95%",
                          marginLeft: "30px",
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-lg-6">
                    <h5 className="py-4">
                      Amplework is a great team to work with, highly
                      recommended.
                    </h5>
                    <p>
                      Flawless Plank was an AI based fitness application and we
                      are glad we get a chance to work on this project with
                      Amplework. They have excellent skills in building mobile
                      apps and willing to work around issues to solve them ..
                      Highly Recommended!
                    </p>
                    <h5 className="pt-5">MANU NAMBOODIRI</h5>
                    <p>Founder, Flawless Plank</p>

                    <h3 className="text-primary">{AiFillLinkedin()}</h3>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <div className="row  pt-5">
                  <div className="col-sm-12 col-lg-6 pt-5 pb-3 px-5">
                    <div className=" linkdinborder " style={{ width: "90%" }}>
                      <img
                        className="linkdinimageshadow img-fluid "
                        src={ken}
                        style={{
                          position: "relative",
                          top: "-40px",
                          left: "-70px",
                          borderRadius: "15PX",
                          width: "95%",
                          marginLeft: "30px",
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-lg-6">
                    <h5 className="py-4">
                      Amplework is a great team to work with, highly
                      recommended.
                    </h5>
                    <p>
                      Flawless Plank was an AI based fitness application and we
                      are glad we get a chance to work on this project with
                      Amplework. They have excellent skills in building mobile
                      apps and willing to work around issues to solve them ..
                      Highly Recommended!
                    </p>
                    <h5 className="pt-5">MANU NAMBOODIRI</h5>
                    <p>Founder, Flawless Plank</p>

                    <h3 className="text-primary">{AiFillLinkedin()}</h3>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <div className="row  pt-5">
                  <div className="col-sm-12 col-lg-6 pt-5 pb-3 px-5">
                    <div className="linkdinborder  " style={{ width: "90%" }}>
                      <img
                        className="linkdinimageshadow img-fluid "
                        src={imo}
                        style={{
                          position: "relative",
                          top: "-40px",
                          left: "-70px",
                          borderRadius: "15PX",
                          width: "95%",
                          marginLeft: "30px",
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-lg-6">
                    <h5 className="py-4">
                      Amplework is a great team to work with, highly
                      recommended.
                    </h5>
                    <p>
                      Flawless Plank was an AI based fitness application and we
                      are glad we get a chance to work on this project with
                      Amplework. They have excellent skills in building mobile
                      apps and willing to work around issues to solve them ..
                      Highly Recommended!
                    </p>
                    <h5 className="pt-5">MANU NAMBOODIRI</h5>
                    <p>Founder, Flawless Plank</p>

                    <h3 className="text-primary">{AiFillLinkedin()}</h3>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </section>

        {/* section 14141414414141441 shokes page */}
        <section className="shokesbgcolor py-4 text-center">
          <h2>Portifolio of our Accomplishments</h2>
        </section>
        <section
          style={{
            backgroundImage: `Url(${shokesbgimage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container ">
            <div className="row ">
              <div className="col-sm-12 col-lg-8 text-light">
                <h2>Sweatcoin</h2>
                <p
                  className="pt-4 "
                  style={{ lineHeight: "2", wordSpacing: "3px" }}
                >
                  A new breed of step counter and activity tracker that converts
                  your steps into a currency you can spend on gadgets, sports
                  and fitness kit, services and experiences. You can exchange
                  them with friends and family.
                </p>
                <div className="d-flex py-4">
                  <h5 className="align-self-center">Available on</h5>
                  <h2 className="px-4">{BsGooglePlay()}</h2>
                  <h2>{GrApple()}</h2>
                </div>

                <div className="d-flex ">
                  <div>
                    <h2>50+</h2>
                    <p>Downloads</p>
                  </div>
                  <h2 className="px-4">|</h2>
                  <div>
                    <h2>4.6/5</h2>
                    <p>Rating</p>
                  </div>{" "}
                  <h2 className="px-4">|</h2>
                  <div>
                    <h2>$20M</h2>
                    <p>Funding Raised</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-lg-4">
                <img src={shokesimage} alt="no pic" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>

        {/* section 1515151515151  Digitalize */}
        <section className="shokesbgcolor">
          <div className="container text-center ">
            <h2 className="pb-5 fw-semibold">
              Digitalize Your Product Idea - Learn More About MVP
            </h2>

            <div className="row">
              {Digitalize.map((data) => (
                <div className="col-sm-12 col-md-4">
                  {/* <img src={data.img} alt="" className="img-fluid" />
                  <p>{data.text}</p> */}
                  <figure>
                    <img
                      src={data.img}
                      alt=""
                      className="img-fluid"
                      style={{ height: "220px", borderRadius: "15px" }}
                    />
                    <figcaption>{data.text}</figcaption>
                  </figure>
                </div>
              ))}
            </div>
            <div>
              <FranqButton varient="primary" data="Read all post" />
            </div>
          </div>
        </section>

        {/* form validation  */}
        <section className="formvalidation p-0">
          <FormvaidationSlide />
        </section>

        {/* footer  */}
        <section className="formvalidation p-0">
          <Footer />
        </section>
      </div>
    </>
  );
};

export default WelcomePage;
