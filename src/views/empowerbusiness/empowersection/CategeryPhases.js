import React from "react";
import "../empowersection/Empowersection.css";
import object from "../../../assets/pnglogoimage/objects.png";
import selfi from "../../../assets/pnglogoimage/selfi.png";
import newtext from "../../../assets/pnglogoimage/newtext.png";
import status from "../../../assets/pnglogoimage/status.png";

const CategoryPhases = [
  {
    img: object,
    h1text: 1,
    text: "Device & Information Management",
    smalltext:
      "This category focuses on managing and securing mobile devices and the data that resides in the storage devices. It includes features such as device.",
    reverese: "",
  },
  {
    img: selfi,
    h1text: 2,
    text: "App & Identity Management",
    smalltext:
      "In-app & identify management we involve extensive features which are follows - app distribution, app wrapping, authentication factors.",
    reverese: "row-reverse",
  },
  {
    img: status,
    h1text: 3,
    text: "Expense & Budget Management",
    smalltext:
      "It focuses on managing and optimizing the expenses associated with enterprise mobility - such as: device procurement and service contracts.",
    reverese: "",
  },
  {
    img: newtext,
    h1text: 4,
    text: "Content Management",
    smalltext:
      "This category of operations involves managing & securing the content that is highly accessed and shared on mobile devices. It includes extensive features.",
    reverese: "row-reverse",
  },
];
const CategeryPhases = () => {
  return (
    <div className="container ">
      {CategoryPhases.map((varient, key) => (
        <div
          className="row align-items-center"
          style={{ flexDirection: varient.reverese }}
        >
          <div className="col-lg-6">
            <div className="bgimgblock">
              <img src={varient.img} alt="no " className="objectimageset img-fluid" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contains">
              <h1>{varient.h1text}</h1>
              <div>
                <h3>{varient.text}</h3>
                <p>{varient.smalltext}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategeryPhases;
