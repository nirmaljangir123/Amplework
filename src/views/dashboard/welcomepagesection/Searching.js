import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import laptopman from "../../../assets/pnglogoimage/laptopman.png"

const Searching = () => {
  return (
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
            Our clients generated more than $50 million in revenues by creating
            seamless mobile applications that run without any bugs or glitches.
            Thus, we continue to upgrade our services to support clients in
            generating higher revenue for operations.
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
  );
};

export default Searching;
