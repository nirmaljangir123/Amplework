import React from "react";
import tower from "../../../assets/pnglogoimage/tower.png";
const LeaveSoftware = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6"></div>
        <div className="col-md-6 bg-info">
          <div className="position-relative">
            <div className="position-absolute ">
              <img src={tower} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveSoftware;
