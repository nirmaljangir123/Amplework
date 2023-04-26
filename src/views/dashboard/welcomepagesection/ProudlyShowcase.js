import React from "react";
import { Carousel } from "react-bootstrap";
import { AiFillLinkedin } from "react-icons/ai";

import linkdin from "../../../assets/Developerphotos/linkdinCeo.png";
import Iars from "../../../assets/Developerphotos/lars_platzdasch.png";
import ken from "../../../assets/Developerphotos/ken_murai.png";
import imo from "../../../assets/Developerphotos/imo_etuk.png";

const ProudlyShowcase = () => {
  return (
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
                Amplework is a great team to work with, highly recommended.
              </h5>
              <p>
                Flawless Plank was an AI based fitness application and we are
                glad we get a chance to work on this project with Amplework.
                They have excellent skills in building mobile apps and willing
                to work around issues to solve them .. Highly Recommended!
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
                Amplework is a great team to work with, highly recommended.
              </h5>
              <p>
                Flawless Plank was an AI based fitness application and we are
                glad we get a chance to work on this project with Amplework.
                They have excellent skills in building mobile apps and willing
                to work around issues to solve them .. Highly Recommended!
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
                Amplework is a great team to work with, highly recommended.
              </h5>
              <p>
                Flawless Plank was an AI based fitness application and we are
                glad we get a chance to work on this project with Amplework.
                They have excellent skills in building mobile apps and willing
                to work around issues to solve them .. Highly Recommended!
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
                Amplework is a great team to work with, highly recommended.
              </h5>
              <p>
                Flawless Plank was an AI based fitness application and we are
                glad we get a chance to work on this project with Amplework.
                They have excellent skills in building mobile apps and willing
                to work around issues to solve them .. Highly Recommended!
              </p>
              <h5 className="pt-5">MANU NAMBOODIRI</h5>
              <p>Founder, Flawless Plank</p>

              <h3 className="text-primary">{AiFillLinkedin()}</h3>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ProudlyShowcase;
