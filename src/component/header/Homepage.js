import React from "react";
import homebgimage from "../../assets/pnglogoimage/homebgimage.jpg";
import Welcome from "./Welcome";
const Homepage = () => {
  console.warn("homepage--->", homebgimage);
  return (
    <div
      style={{
        backgroundImage: `Url(${homebgimage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Welcome />
      
    </div>
  );
};

export default Homepage;
