import React from "react";
import "../empowersection/Empowersection.css";
import add from "../../../assets/imges/adds.png";
import dots from "../../../assets/opicityimage/dots.png";
import { abc } from "./MockupforEmpower";
const ProcessMobileApp = () => {
  return (
    <div className="container">
      {/* <div className="row align-items-center">
        <div className="col-md-6">
          <div className="text-center">
            <img src={add} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="toolboxrequirment position-relative">
            <div className="main-box ">
              <aside className="">
                <figure className="bgone mb-0 ms-md-3 me-3 rounded-circle">
                  01
                </figure>
              </aside>
              <aside>
                <h3 className="w-100">Gathering Requirements</h3>
                <ul style={{ listStyle: "none", paddingLeft: "0px" }}>
                  <li>
                    <img src={dots} alt="" width={10} className="" />{" "}
                    Identifying your goals.
                  </li>
                  <li>
                    <img src={dots} alt="" width={10} /> Identifying your goals.
                  </li>
                  <li>
                    <img src={dots} alt="" width={10} /> Identifying your goals.
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </div>
      </div> */}
      {/* cheack perpose */}
      {abc.map((varient, key) => (
        <div
          className="row align-items-center"
          style={{ flexDirection: `${varient.direction}` }}
        >
          <div className="col-md-6">
            <div className="text-center">
              <img src={varient.pic} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6">
            <div className={`${varient.data} position-relative `}>
              <div
                className="main-box"
                style={{
                  flexDirection: `${varient.disk}`,
                  backgroundColor: `${varient.color}`,
                }}
              >
                <aside className="">
                  <figure
                    className={`${varient.onecss} mb-0 ms-md-3 rounded-circle`}
                  >
                    {varient.figure}
                  </figure>
                </aside>
                <aside>
                  <h3 className="w-100">{varient.text}</h3>
                  <ul style={{ listStyle: "none", paddingLeft: "0px" }}>
                    <li>
                      <img src={dots} alt="" width={10} className="" />{" "}
                      {varient.listul1}
                    </li>
                    <li>
                      <img src={dots} alt="" width={10} /> {varient.listul2}
                    </li>
                    <li>
                      <img src={dots} alt="" width={10} /> {varient.listul3}
                    </li>
                  </ul>
                </aside>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProcessMobileApp;
