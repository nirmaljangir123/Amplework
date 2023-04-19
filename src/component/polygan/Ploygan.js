import React from "react";
import "../../component/polygan/Polygan.css";
const Ploygan = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container d-flex py-5">
          <div className="d-block bg-info">
            <div className="d-flex text-center ">
              <div className="hexagon-shape "></div>
              <div className="hexagon-shape "></div>
            </div>

            <div className=" bg-warning ">
              <div className="hexagon-shape "></div>
            </div>
          </div>
          <div className="">
            <p>AMPLEWORK SOFTWARE</p>
            <p>Your Dedicated Supporter for All Maintenance Services</p>
            <p>
              We are a leading tech company in offering digital solutions to
              hundreds of clients across the globe. Our team of developers
              exhibits a wide range skills and expertise that help in delivering
              high quality digital solutions to meet your business requirements.
              Our approach and software development strategies are well tested
              and suitable in ensuring that your idea is turned into a working
              solution in a timely manner.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ploygan;
