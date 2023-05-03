import React from "react";
import { Cutting } from "../../../mockup/Apps";
import { Button } from "react-bootstrap";

const CuttingEdage = () => {
  return (
    <div className="container">
      <div className="row bg-info ">
        {Cutting.map((varient, key) => (
          <div className={`${varient.colres} ${varient.back} p-5`}>
            <p>{varient.text}</p>
            {varient?.data?.map((item) => (
              <button className={`${varient.btncs}`}>
                {item.title}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CuttingEdage;
