import React from 'react'
import groupimage from "../../../assets/pnglogoimage/groupbgimage.png";
import { FranqButton } from '../../../component/button/Button';
import { ImCompass } from "react-icons/im";
import { FcOk } from "react-icons/fc";
import { TrustedDeveloper } from '../../../mockup/Mockup';

const FullstackDev = () => {
  return (
    <div className="container">
      <div>
        <div
          style={{
            backgroundImage: `Url(${groupimage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            borderRadius: "20px",
          }}
          className="row p-4 text-light justify-content-end"
        >
          <div className="col-sm-12 col-md-7">
            <h2>Dedicated Full-stack developer?</h2>
            <p>
              Let's Discuss Your Project how we will transform your idea
              into an amazing digital product?
            </p>
          </div>

          <div className="col-sm-12 col-md-5 align-self-center text-center">
            <FranqButton
              varient="primary"
              data="Get 2 Week Free Trial"
              logo={ImCompass()}
            />
          </div>
        </div>
      </div>
      <div className="text-center">
        <h2 className="pt-5 pb-3">Trusted and Skilled Developer</h2>
        <p>
          Our developers are ready to join your team and build amazing
          mobile & web apps.
        </p>
        <div className="px-5 ">
          <div className="row px-5 ">
            {TrustedDeveloper.map((Developer, key) => (
              <div className="col-sm-12 col-md-6 col-lg-3 p-3">
                <div>
                  <img
                    src={Developer.img}
                    alt="no pic"
                    className="trustedboxshadow img-fluid border border-3"
                    style={{ borderRadius: "30% 0% 30% 0%" }}
                  />
                </div>
                <div
                  className=" text-dark fw-bold position-sticky"
                  style={{
                    marginTop: "-25px",
                    backgroundColor: "rgb(205,206,15)",
                    width: "75%",
                    borderRadius: "10px",
                  }}
                >
                  <p className="">
                    {Developer.name}
                    <span>{FcOk()}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FullstackDev
