import React from "react";
import shokesimage from "../../../assets/pnglogoimage/shokesimage.png";

import { GrApple } from "react-icons/gr";
import { BsGooglePlay } from "react-icons/bs";
const Sweatcoin = () => {
  return (
    <div className="container ">
      <div className="row ">
        <div className="col-sm-12 col-lg-8 text-light">
          <h2>Sweatcoin</h2>
          <p className="pt-4 " style={{ lineHeight: "2", wordSpacing: "3px" }}>
            A new breed of step counter and activity tracker that converts your
            steps into a currency you can spend on gadgets, sports and fitness
            kit, services and experiences. You can exchange them with friends
            and family.
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
  );
};

export default Sweatcoin;
