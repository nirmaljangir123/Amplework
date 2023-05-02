import React from "react";
import "../empowersection/Empowersection.css";
import add from "../../../assets/imges/adds.png";
import dots from "../../../assets/opicityimage/dots.png";
const OperationalCost = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="text-center">
            <img src={add} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="toolboxrequirment position-relative ">
            <div className="d-flex align-items-start main-box">
              <aside className="d-flex align-items-center flex-md-row flex-row-reverse">
                <figure className="bgone mb-0 ms-md-3 me-3 rounded-circle">
                  01
                </figure>
              </aside>
              <aside>
                <h3 className="w-100">Gathering Requirements</h3>
                <ul style={{ listStyle: "none" }}>
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
      </div>
    </div>
  );
};

export default OperationalCost;
