import React from "react";
import TopNavbar from "./Navbar";
import homebgimage from "../../assets/pnglogoimage/homebgimage.jpg";
import Button from "react-bootstrap/Button";
import Ploygan from "../polygan/Ploygan";
import Experisce from "../polygan/Experisce";

import "../../component/header/Allcss.css";
import Boxes from "../polygan/Boxlogo";
import Advanceapplication from "../polygan/Advanceapplication";
import { Activites } from "../polygan/Activites";
import AppsMaintaine from "../polygan/AppsMaintaine";
import { Appshape } from "../polygan/Appshape";
import Fasinating from "../polygan/Fasinating";
const Welcome = () => {
  return (
    <>
      {/* <TopNavbar /> */}
      {/* <Nav/> */}
      {/* <div className="container-fluid py-5 bg-info">
        <div className=" row  justify-content-center pt-3">
          <p
            className="text-uppercase text-warning text-center pt-5 fw-semibold mb-0"
            style={{ fontSize: "1rem" }}
          >
            application mantainance and support
          </p>
          <p className="text-center fs-3 col-8 text-light fw-semibold">
            Top classs application mantainace and support service for
            error-free, hight performing applications
          </p>
        </div>
        <div className="text-center pb-5">
          <Button variant="warning" className="fw-semibold px-3">
            Schdule a call
          </Button>
        </div>
      </div> */}
      {/* <Ploygan />
      <Experisce />
      <Boxes/>
      <Advanceapplication/>
      <Activites/>
      <AppsMaintaine/>
      <Appshape/>
      <Fasinating/> */}
    </>
  );
};

export default Welcome;

{
  /* <container fluid>
      <row>
        <div
          className=""
          style={{
            backgroundImage: `Url(${homebgimage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <TopNavbar />
          <div className="text-light justify-content-center">
            <div className="col-12 text-center">
              <p className="text-warning">APPLICATION MAINTENANCE AND SUPPORT</p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-8 bg-success justify-content-center">
              <p className=" bg-warning text-center">
                Top class application mainteneance and support services for
                error-free,high-performing applications
              </p>
            </div>
          </div>
        </div>
      </row>
    </container> */
}
