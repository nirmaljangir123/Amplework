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

export const FranqButton = (props) => {
  // console.warn("======>varient", props);
  const { varient, data, logo } = props;

  return (
    <Button variant={props.varient} className=" rounded-pill px-4">
      {props.data} <span className="">{props.logo}</span>
    </Button>
  );
};

// export const Homepagebutton=(props)=>{
//   const {btn}=props
//   return(
//     <Button variant="warning" className="fw-semibold px-3">
//     {btn}
//   </Button>
//   )
// }

export const HomeButton = (props) => {
  // console.warn("======>varient", props);
  const { btn, display } = props;

  return (
    <Button
      variant="warning"
      className=" rounded px-4  text-light"
    
    >
      {btn}
    </Button>
  );
};
