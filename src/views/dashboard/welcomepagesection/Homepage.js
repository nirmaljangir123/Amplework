import React from "react";
import { Button } from "react-bootstrap";
import "../welcomepagesection/Section.css";
const Homepage = () => {
  return (
    <div className="container">
      <div className=" row text-center pt-5">
        <p
          className="text-uppercase text-warning text-center fw-semibold"
          style={{ letterSpacing: "3px" }}
        >
          {" "}
          Application mantainance and support
        </p>
        <h1 className="text-light">
          Top classs application mantainace and support service for error-free,
          hight-performing applications
        </h1>
      </div>
      <div className="text-center pt-5">
        <Button variant="warning" className="fw-semibold px-3">
          Schdule a call
        </Button>
      </div>
    </div>
  );
};

export default Homepage;
