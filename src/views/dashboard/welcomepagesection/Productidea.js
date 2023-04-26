import React from "react";
import { Digitalize } from "../../../mockup/Mockup";
import { FranqButton } from "../../../component/button/Button";
const Productidea = () => {
  return (
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
  );
};

export default Productidea;
