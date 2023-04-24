import React from "react";

import Card from "react-bootstrap/Card";
import { Buttondata } from "../button/Button";
import "../footer/footer.css";
import enterpriseBg from "../../assets/opicityimage/enterpriseBg.png";
import { CardGroup } from "react-bootstrap";
const FooterBlock = (props) => {
  // const { varient } = props;
  console.warn("All props data----->");
  // console.warn("varient data ----->");
  
  return (
    <>
      <CardGroup className="">
        <Card
          style={{
            width: "100%",
            backgroundImage: `Url(${enterpriseBg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right bottom",
            cursor: "pointer",
            opacity: "transparient",
          }}
          className="cardbgimage  p-3"
        >
          <Card.Body className="">
            <Card.Title className="">
              <h2>{}</h2>
            </Card.Title>
            <Card.Text className="">{}</Card.Text>
            {/* <div className="d-flex justify-content-between">
              <div className="col-sm-4 bg-info">
                <h1 className="p-2 text-center">
                  {varient.part}
                </h1>
                <p>{varient.parttext}</p>
              </div>
              <div className="col-sm-4">
                <h1>{varient.part}</h1>
                <p>{varient.parttext}</p>
              </div>
              <div className="col-sm-4">
                {" "}
                <h1>{varient.part}</h1>
                <p>{varient.parttext}</p>
              </div>
            </div> */}
            {/* <div></div>/ */}
            {/* <Buttondata buttondata={buttondata} /> */}
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "100%",
            backgroundImage: `Url(${enterpriseBg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right bottom",
            cursor: "pointer",
            opacity: "transparient",
            // backgroundColorlor:"#fff",
          }}
          className="cardbgimage  p-3"
        >
          <Card.Body className="">
            <Card.Title className="">
              <h2>{}</h2>
            </Card.Title>
            <Card.Text className="">{}</Card.Text>
            {/* <div className="d-flex justify-content-between">
              <div className="col-sm-4 bg-info">
                <h1 className="p-2 text-center">
                  {varient.part1}
                </h1>
                <p>{varient.parttext1}</p>
              </div>
              <div className="col-sm-4">
                <h1>{varient.part1}</h1>
                <p>{varient.parttext1}</p>
              </div>
              <div className="col-sm-4">
                {" "}
                <h1>{varient.part1}</h1>
                <p>{varient.parttext1}</p>
              </div>
            </div> */}
            {/* <div></div>/ */}
            {/* <Buttondata buttondata={buttondata} /> */}
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
};

export default FooterBlock;
