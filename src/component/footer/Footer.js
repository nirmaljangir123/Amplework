import "../../component/footer/footer.css";
import FooterIso from "./FooterIso";
import FooterDetails from "./FooterDetails";
import Footertwatter from "./Footertwatter";
import FooterBlock from "./FooterBlock";
import { FooterBlockMockup } from "../../mockup/Mockup";
const Footer = () => {
  return (
    <>
      <div className="container footerbgcolor py-5">
        <FooterBlock varient={FooterBlockMockup} />
        <div className="py-5">
          <FooterIso />
        </div>
      </div>
      <div className="bg-dark text-light">
        <FooterDetails />
      </div>
      <div className="footertwatter">
        <Footertwatter />
      </div>
    </>
  );
};
export default Footer;
