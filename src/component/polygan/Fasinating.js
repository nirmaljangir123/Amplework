import React from "react";
import { Card, CardImg } from "react-bootstrap";
import "../../component/polygan/Polygan.css";
import Applock from "../../assets/pnglogoimage/Applock.png";
import Appbug from "../../assets/pnglogoimage/Appbug.png";
import Apparrow from "../../assets/pnglogoimage/Apparrow.png";
import Appgrouth from "../../assets/pnglogoimage/Approuth.png";
import Apprecycle from "../../assets/pnglogoimage/Apprecycle.png";
import Appstorgae from "../../assets/pnglogoimage/Appstorage.png";

import {
  FcSmartphoneTablet,
  FcTabletAndroid,
  FcPhoneAndroid,
  FcMultipleSmartphones,
  FcIpad,
  FcOrgUnit,
} from "react-icons/fc";

const Fascinate = [
  {
    text: "Longer Life span",
    smalltext:
      "Rectifying errors quickly helps in enhancing the lifespan of mobile applications in a well-defined manner.",
    png: Apparrow,
  },
  {
    text: "Bugs Removal",
    smalltext:
      "Bug removal is an essential part of software maintenance, as it helps to ensure that applications are functioning-defined manner.",
    png: Appbug,
  },
  {
    text: "Upwards App Performance",
    smalltext:
      "When your application gets frequent maintenance at a consistent interval then it eventually follows upwards growth.",
    png: Appgrouth,
  },
  {
    text: "Security Management",
    smalltext:
      "Data security measures keep evolving to eliminate counterfeit measures - so make your apps profound with security management.",
    png: Applock,
  },
  {
    text: "Data Management",
    smalltext:
      "User,s data is the most precious asset for your business and consistent maintenance empowers data management functions.",
    png: Appstorgae,
  },
  {
    text: "Reduced Tech Debts",
    smalltext:
      "By addressing issues and making updates in a timely manner, you can avoid accumulating technical issues.",
    png: Apprecycle,
  },
];
const Fasinating = () => {
  return (
    <div className="container-fluid imagebgcolor pt-5">
      <div className="container">
        <div className="text-center">
          <h3>
            Fascinating Benefits of Application Maintenance and Support Services
          </h3>
          <p className="px-5">
            Time to empower your mind with the fascinating benefits of
            application maintenance and support services. So, get ready to
            empower your mobile application growth with these foremost benefits.
          </p>
        </div>
         <div className="row py-5">
          {Fascinate.map((variant) => (
            <div className="col-sm-12 col-lg-6 mb-4">
              <Card key={variant} className="cardhovers p-3">
                <Card.Body>
                  <div className="d-flex justify-content-between ">
                    <div className="">
                      <Card.Title>{variant.text}</Card.Title>
                      <Card.Text className="">{variant.smalltext}</Card.Text>
                    </div>
                    <div className="imagebgcolor align-self-center rounded p-3">
                      <Card.Img
                        src={variant.png}
                        alt="no pic"
                        className="imagefixed"
                      />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
        {/* <div className="row">
          {Fascinate.map((variant) => (
            <div className="col-sm-12 col-lg-6 mb-4">
              <Card key={variant} className="cardhovers p-3">
                <Card.Body>
                  <div className="d-flex justify-content-between ">
                    <div className="">
                      <Card.Title>{variant.text}</Card.Title>
                      <Card.Text className="">{variant.smalltext}</Card.Text>
                    </div>
                    <div className="imagebgcolor align-self-center rounded p-3">
                      <Card.Img
                        src={variant.png}
                        alt="no pic"
                        className="imagefixed"
                      />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Fasinating;
