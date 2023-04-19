import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import FooterBlock from "../../component/footer/FooterBlock";
import Accessibility from "../../assets/pnglogoimage/Accessibility.png";
import Adaptability from "../../assets/pnglogoimage/Adaptability.png";
import calendar from "../../assets/pnglogoimage/calendar.png";
import hourglass from "../../assets/pnglogoimage/hourglass.png";
import partTime from "../../assets/pnglogoimage/partTime.png";
import Scalability from "../../assets/pnglogoimage/Scalability.png";
import FooterIso from "../../component/footer/FooterIso";
import FooterDetails from "../../component/footer/FooterDetails";
import Footertwatter from "../../component/footer/Footertwatter";
import enterpriseBg from "../../assets/opicityimage/enterpriseBg.png";
import { Welcome } from "../../component";

import "../../component/footer/footer.css";
const Footer = () => {
  return (
    <>
      <div className="container-fluid footerbgcolor py-5">
        <div className="container">
          <CardGroup>
            <FooterBlock
              image={{
                part: partTime,
                full: calendar,
                hour: hourglass,
              }}
              text={{
                part: "Part Time",
                full: "Full-time",
                hour: "Hourly",
              }}
              buttondata={{
                data: "Explore more",
                varient: "outline-warning",
                round: "rounded-pill",
                fw: "semibold",
              }}
              bgimage={{}}
            />
            <FooterBlock
              image={{
                part: Adaptability,
                full: Scalability,
                hour: Accessibility,
              }}
              text={{
                part: "Accessibility",
                full: "Adaptability",
                hour: "Scalability",
              }}
              buttondata={{
                data: "Explore more",
                varient: "outline-warning",
                round: "rounded-pill",
                fw: "semibold",
              }}
            />
          </CardGroup>
          <div className="py-5">
            <FooterIso />
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-light">
        <div className="container">
          <FooterDetails />
        </div>
      </div>
      <div className="container-fluid footertwatter">
        <div className="container">
          <Footertwatter />
        </div>
      </div>
      
    </>
  );
};
export default Footer;
