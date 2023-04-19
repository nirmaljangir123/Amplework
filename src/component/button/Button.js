import React from "react";
import Button from "react-bootstrap/Button";

export const Buttondata = (props) => {
  const { buttondata } = props;

  return (
    <Button variant={buttondata.varient} className=" rounded-pill px-5">
      {buttondata.data}
    </Button>
  );
};

export const MyButton = (props) => {
  // console.warn("=======>buitoon props", props);
  return (
    <>
      <Button variant="warning" style={{ color: props.color }}>
        {props.text}
      </Button>{" "}
    </>
  );
};
