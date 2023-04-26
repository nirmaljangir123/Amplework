import React from "react";
import overview from "../../../assets/pnglogoimage/overview.svg";

const DedicatedDeveloper = () => {
  return (
    <div className="container">
      <div className="row d-lg-flex ">
        <div className="col-sm-12 col-lg-6 text-center">
          <img src={overview} alt="no pic" width={400} className="img-fluid" />
        </div>

        <div className="col-sm-12 col-lg-6 pt-4">
          <h5 className="text-primary fw-bold" style={{ letterSpacing: "4px" }}>
            AMPLEWORK SOFTWARE
          </h5>
          <h4 className="py-2">
            {" "}
            Your Dedicated Supporter for All Maintenance Services
          </h4>

          <p className="">
            We are a leading tech company in offering digital solutions to
            hundreds of clients across the globe. Our team of developers
            exhibits a wide range skills and expertise that help in delivering
            high quality digital solutions to meet your
            <br />
            business requirements. Our approach and software development
            strategies are well tested and suitable in ensuring that your idea
            is turned into a working solution in a timely manner.
            <br />
            business requirements. Our approach and software development
            strategies are well tested and suitable in ensuring that your idea
            is turned into a working solution in a timely manner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DedicatedDeveloper;
