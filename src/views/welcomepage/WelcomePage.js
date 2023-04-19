import React from "react";
import { Button, Card } from "react-bootstrap";
import "../welcomepage/welcomepage.css";
import { TopNavbar, Welcome } from "../../component";
import Ploygan from "../../component/polygan/Ploygan";
import Footer from "../footer/Footer";
import home from "../../assets/pnglogoimage/homebgimage.jpg";

// cards component import
import Cards from "../";
import CardGroup from "react-bootstrap/CardGroup";
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
} from "react-icons/gr";
import CardsComponent, { NumberSpeak } from "../../component/Boxset/Card";
import Apparrow from "../../assets/pnglogoimage/Apparrow.png";
import { IoBugOutline } from "react-icons/io";
import { BsBug } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { MdOutlineSettingsRemote } from "react-icons/md";
import { GiCoolSpices } from "react-icons/gi";
import { MdOutlineAppShortcut } from "react-icons/md";
import { SiAzuredataexplorer } from "react-icons/si";
import { RiApps2Fill } from "react-icons/ri";
import { SlGameController } from "react-icons/sl";

//  component
import { MyButton } from "../../component/button/Button";
import homebgimage from "../../assets/pnglogoimage/homebgimage.jpg";
import { VscVersions } from "react-icons/vsc";
import { AppcardsGroup } from "../../component/Boxset/Card";
import { Active, Cardsdata, Fascinate } from "./Mockup";
// mockup map

const WelcomePage = () => {
  return (
    <>
      <TopNavbar />
      <div className="page-containe">
        <section
          className="classmantaience"
          style={{
            backgroundImage: `Url(${home} )`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className=" row text-center">
              {/* <p
                className="text-uppercase text-warning text-center pt-5 fw-semibold mb-0"
                style={{ fontSize: "1rem" }}
              >
                application mantainance and support
              </p>
              <p className="text-center fs-3 col-8 text-light fw-semibold">
                Top classs application mantainace and support service for
                error-free, hight performing applications
              </p> */}
              <p className="text-uppercase text-warning text-center fw-semibold">
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
                  src="https://www.amplework.com/wp-content/themes/amplework/assets/img/graphics/cloudSolution/overview.png"
                  alt="no pic"
                  width={400}
                  className="img-fluid"
                />
              </div>

              <div className="col-sm-12 col-lg-6 pt-4">
                <h6 className="text-primary">AMPLEWORK SOFTWARE</h6>
                <h5 className="w-75">
                  {" "}
                  Your Dedicated Supporter for All Maintenance Services
                </h5>

                <p className="w-75">
                  We are a leading tech company in offering digital solutions to
                  hundreds of clients across the globe. Our team of developers
                  exhibits a wide range skills and expertise that help in
                  delivering high quality digital solutions to meet your
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

              <p className="paddingbottom pt-4 px-5">
                our advanced mobile application maintenance and Support provide
                a Comprehensive approach to managing and maintaining your
                application.
              </p>
            </div>
          </div>
        </section>
        {/* section 44444444 */}
        <section>
          <div className="container text-center">
            <h2 className=" px-2">
              Our Advanced Application Support Service - Elevate Your
              Application's Performance
            </h2>
            <p className=" px-5 ">
              Complex applications which are configured with the latest APIs
              require the advanced solutions to keep the working mechanism of
              the applications in a perfect shape. At Amplework,
            </p>
            <div>
              <CardGroup>
                <CardsComponent
                  data={GrIteration()}
                  text="Application Re-engineering"
                  smalltext="Our developers evaluate existing applications through a series ofin-house testing processes in order to evaluate the functionalities ofthe applications that need to be re-engineered"
                />
                <CardsComponent
                  data={GrStorage()}
                  text="Application Migration & Integration"
                  smalltext="Our engineers are profound in supporting you for moving applications from physical or local settings to remote based servers. We also provide application migration as well as integration services."
                />
                <CardsComponent
                  data={GrTestDesktop()}
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

        {/* section 5555555555 */}
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
                <ul>
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
                          className="iconshadow p-2 rounded border border-1"
                          style={{
                            backgroundColor: varient.bgcolor,
                            boxShadow: varient.backbgcolor,
                          }}
                        >
                          <h1 className="">{varient.logo}</h1>
                        </div>
                        <div className="align-text-center">
                          <p className="px-5">{varient.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* <div className="d-flex">
                      <div className="p-3">
                        <h1>
                          <BsBug />
                        </h1>
                      </div>
                      <p className="align-self-center">
                        
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-lg-6">
                    <div className="d-flex ">
                      <h1>
                        <GrSettingsOption />
                      </h1>
                      <p className="align-self-center">Quality Checks</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section 6666666666666666666 */}
        <section>
          <div className="container">
            <div className="text-center">
              <p className="text-uppercase text-warning text-center fw-semibold">
                Keep Your Applications Always Shine
              </p>
              <h2>Types of Apps We Maintain At Amplework Software</h2>
              <p className="px-5 py-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>

            <CardGroup className="">
              <AppcardsGroup icon={GrSystem()} text="Web Apps" />
              <AppcardsGroup
                icon={GrCloudSoftware()}
                text="Cloud Apps & SaaS"
              />
              <AppcardsGroup icon={GiCoolSpices()} text="Enterprise Apps" />
              <AppcardsGroup icon={MdOutlineAppShortcut()} text="AR/VR Apps" />
            </CardGroup>
            <CardGroup>
              <AppcardsGroup
                icon={SiAzuredataexplorer()}
                text="Database Apps"
              />
              <AppcardsGroup icon={RiApps2Fill()} text="AI/ML Apps" />
              <AppcardsGroup icon={SlGameController()} text="Gaming Apps" />
              <AppcardsGroup icon={GrVirtualMachine()} text="Hybrid Apps" />
            </CardGroup>
          </div>
        </section>
        {/* section 777777777777 */}
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
              {Cardsdata.map((variant) => (
                <Card
                  key={variant}
                  style={{ width: "20rem" }}
                  className="cardsborder1 text-center m-4 p-4"
                >
                  <Card.Body className="cardbodyborder1">
                    <h1>{variant.icon}</h1>
                    <Card.Title className="icontitletext11">
                      {" "}
                      {variant.text}{" "}
                    </Card.Title>
                    <Card.Text className="smalltext1">
                      {variant.smalltext}
                    </Card.Text>
                    <Card.Text className="linktext1">{variant.link}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* section 888888888888 */}
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

        <section></section>
      </div>
      <Footer />
    </>
  );
};

export default WelcomePage;

{
  /* <div className="col-lg-6">
<div className="first pt-2">
  <img src={homebgimage} alt="" className="img-fluid" />
</div>
<div className="second bg-success"></div>
</div> */
}
// const Active = [
//   {
//     logo: Apparrow(),
//     bgcolor: rgb(240, 100, 102),
//     backbgcolor: rgb(255, 225, 225),
//     text: "",
//   },
//   {
//     logo: Apparrow(),
//     bgcolor: rgb(240, 100, 102),
//     backbgcolor: rgb(255, 225, 225),
//     text: "",
//   },
//   {
//     logo: Apparrow(),
//     bgcolor: rgb(240, 100, 102),
//     backbgcolor: rgb(255, 225, 225),
//     text: "",
//   },
// ];
