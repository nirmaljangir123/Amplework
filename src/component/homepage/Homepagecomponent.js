import React from "react";
import { Button } from "react-bootstrap";
import { HomeButton } from "../button/Button";

const Homepagecomponent = (props) => {
  const { smalltext, text, btn, bgimage } = props;

  console.log("btn----", btn);
  return (
    <section
      style={{
        backgroundImage: `Url(${bgimage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container text-center p-5">
        <div className=" row text-center py-5 ">
          <p
            className="text-uppercase text-warning text-center fw-semibold"
            style={{ letterSpacing: "3px" }}
          >
            {smalltext}
          </p>
          <h1 className="text-light">{text}</h1>
        </div>
        {btn && btn.length ? <HomeButton btn={btn} /> : ""}
      </div>
    </section>
  );
};

export default Homepagecomponent;
