import React from "react";

import Card from "react-bootstrap/Card";
import { Buttondata } from "../button/Button";
import "../footer/footer.css";
import enterpriseBg from "../../assets/opicityimage/enterpriseBg.png";
const FooterBlock = (props) => {
  const { image, text, buttondata } = props;
  // console.warn("props----->",partTime)
  return (
    <Card
      style={{
        width: "100%",
        backgroundImage: `Url(${enterpriseBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right bottom",
        cursor: "pointer",
        opacity: "transparient",
      }}
      className="cardbgimage"
    >
      <Card.Body className="py-5">
        <Card.Title className="fs-3">
          {" "}
          Do you want to hire resources for your project?
        </Card.Title>
        <Card.Text className="w-75">
          We have web and app development teams to serve modern tech-savy client
          by bidding on the challenges on their bespoken requirement.
        </Card.Text>
        <div></div>
        <Buttondata buttondata={buttondata} />
      </Card.Body>
    </Card>
  );
};

export default FooterBlock;
// const FooterBlock = (props) => {
//   return (
//     <div>
//       <div>
//         <div>
//           <h4> Do you want to hire resources for your project?</h4>
//         </div>
//         <div>
//           <p>
//             We have web and app development teams to serve modern tech-savy
//             client by bidding on the challenges on their bespoken requirement.
//           </p>
//         </div>
//         <div className="bg-warning">
//           <div>
//             <div>
//               <img src={}/>
//             </div>
//           </div>

//           <div>
//             <p></p>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default FooterBlock;

{
  /* <div className=" bg-warning d-sm-block d-lg-flex px-2 py-2 w-100">
<div className="bg-success px-1 text-center d-sm-flex d-lg-block ">
  <div style={{ width: "100%", height: "10%" }}>
    <img src={image.part} alt="no p" className="img-fluid" />
  </div>
  <div className="bg-danger pt-2 mt-1">
    <p>{text.part}</p>
  </div>
</div>
<div className="bg-success px-1 text-center d-sm-flex d-lg-block ">
  <div style={{ width: "100%", height: "10%" }}>
    <img src={image.full} alt="no p" className="img-fluid" />
  </div>
  <div className="bg-danger pt-2 mt-1">
    <p>{text.full}</p>
  </div>
</div>
<div className="bg-success px-1 text-center d-sm-flex d-lg-block ">
  <div style={{ width: "100%", height: "10%" }}>
    <img src={image.hour} alt="no p" className="img-fluid" />
  </div>
  <div className="bg-danger pt-2 mt-1">
    <p>{text.hour}</p>
  </div>
</div>
</div> */
}

{
  /* <div className="bg-warning d-block d-lg-flex justify-content-between w-75">
          <div className="d-flex d-lg-block  px-3 py-3  bg-info justify-content-between">
            <div>
              <img src={image.part} alt="no pic" className="img-fluid" />
            </div>
            <div className="align-self-center py-2 ">
              <p>{text.part}</p>
            </div>
          </div>
          <div className="d-flex d-lg-block px-3 py-3 bg-info justify-content-between">
            <div>
              <img src={image.full} alt="no pic" className="img-fluid" />
            </div>
            <div className="align-self-center py-2">
              <p>{text.full}</p>
            </div>
          </div>
          <div className="d-flex d-lg-block px-3 py-3 bg-info justify-content-between">
            <div>
              <img src={image.hour} alt="no pic" className="img-fluid" />
            </div>
            <div className="align-self-center py-2">
              <p>{text.hour}</p>
            </div>
          </div>
        </div> */
}
{
  /* <div className="d-flex d-lg-block px-5 pt-2 bg-info" style={{}}>
            <div className="bg-success text-center" style={{width:''}}>
              <img src={image.full} alt="no pic" className="img-fluid" />
            </div>
            <div className="align-self-center pt-2 ">
              <p>{text.full}</p>
            </div>
          </div>
          <div className="d-flex d-lg-block px-5 pt-2 bg-info" style={{}}>
            <div className="bg-success text-center" style={{width:''}}>
              <img src={image.hour} alt="no pic" className="img-fluid" />
            </div>
            <div className="align-self-center pt-2 ">
              <p>{text.hour}</p>
            </div>
          </div> */
}

//      {/* <div className="d-sm-block d-lg-flex text-center">
//   <div className="p-4">
//     <div className="bg-success ps text-center px-3 py-3 rounded">
//       <img src={image.part} alt="no pic" />
//     </div>
//     <p className="text-dark fw-semibold pt-3">{text.part}</p>
//   </div>
//   <div className="p-4">
//     <div className="bg-success ps text-center px-3 py-3 rounded">
//       <img src={image.full} alt="no pic" />
//     </div>
//     <p className="text-dark fw-semibold pt-3">{text.part}</p>
//   </div>
//   <div className="p-4">
//     <div className="bg-success ps text-center px-3 py-3 rounded">
//       <img src={image.hour} alt="no pic" />
//     </div>
//     <p className="text-dark fw-semibold pt-3">{text.part}</p>
//   </div>

// </div>
