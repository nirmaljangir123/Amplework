import React from "react";
import {
  AiOutlineWindows,
  AiOutlineWhatsApp,
  AiOutlineTwitter,
  AiOutlineApple,
} from "react-icons/ai";

const Footerbar = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="footerspace col-sm-12 col-md-7 col-lg-9 ">
          <ul className="d-flex flex-wrap">
            <li>About</li>
            <li>Services</li>
            <li>Contact us</li>
            <li>carrer</li>
            <li>Blog</li>
            <li>privacy policy</li>
            <li>Legel</li>
          </ul>
        </div>
        <div className="col-sm-12 col-md-5 col-lg-3  d-flex footerspace">
          <div className="Aihover">
            <AiOutlineWindows />
          </div>
          <div className="Aihover">
            <AiOutlineWhatsApp />
          </div>
          <div className="Aihover">
            <AiOutlineTwitter />
          </div>
          <div className="Aihover">
            <AiOutlineApple />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footerbar;
