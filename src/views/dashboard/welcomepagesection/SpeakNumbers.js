import React from "react";
import { NumberSpeak } from "../../../component/Boxset/Card";

const SpeakNumbers = () => {
  return (
    <div className="container">
      <div className="text-center">
        <h2 className="">Our Numbers Speaks For Our Business Operations</h2>
        <p className="px-5">
          We don't compromise on the quality aspects thus it makes us the
          leading application development maintenance and support service
          provider. We resolve even the most severe incidents in less than 8
          hours.
        </p>
        <div className="row ">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <NumberSpeak
              bluetext="10-15 Mins"
              text="Minimum Incident Response Time"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <NumberSpeak bluetext="2-3 Hours" text="insident solution Time" />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <NumberSpeak bluetext="350+" text="Powress Team Member" />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <NumberSpeak bluetext="100%" text="With Quality Optimization" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakNumbers;
