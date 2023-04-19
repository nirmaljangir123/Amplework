import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import amplworkLogo from "../../assets/logo/amplworkLogo.png";
import { aws, dbregister, googlecloud, iso } from "../../assets/pnglogoimage";

function FooterIso() {
  return (
    <div className="row ">
      <div className=" col-sm-12 col-md-12 col-lg-5">
        <img src={amplworkLogo} alt="No pic" width="80%" />
      </div>
      <div className="d-flex flex-wrap col-lg-7 justify-content-between text-light">
        <div className="row ">
          <div className="col-sm-6 col-lg-3 ">
            <div className="text-center ">
              <div className="">
                <img src={iso} alt="no pic" width="60%" className="" />
              </div>
              <div className="">
                <p className="w-100 fw-bold"> ISO-27001 software security</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="text-center ">
              <div className="">
                <img src={dbregister} width="60%" alt="no pic" className="" />
              </div>
              <div>
                <p className="w-100 fw-bold">Dun & broadcast Varified</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="text-center ">
              <div className="">
                <img src={googlecloud} width="60%" alt="no pic" className="" />
              </div>
              <div>
                <p className="w-100 fw-bold">Google cloud partner</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="text-center">
              <div className="">
                <img src={aws} width="60%" alt="no pic" className="" />
              </div>
              <div>
                <p className="w-100 fw-bold">Aws consaulting partner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterIso;
