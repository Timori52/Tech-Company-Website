import React from "react";
import FooterOuterEllipse from "./parts/FooterOuterEllipse.png";
import FooterInnerEllipse from "./parts/FooterInnerEllipse.png";

const Footer = () => {
  return (
    <footer
      style={{
        height: "300px",
        width: "100%",
        position: "relative",
        overflowY: "hidden",
        overflowX: "hidden",
        backgroundColor: "#0E0E2C",
      }}
      className="footer mt-5"
    >
      <img src={FooterOuterEllipse} alt="" className="FooterOuterEllipse" />
      <img src={FooterInnerEllipse} alt="" className="FooterInnerEllipse" />

      <div className="row">
        <div className="col-md-6">
          <ul className="list">
            <li className="company fs-4 "> Company</li>
            <li className="FAboutUs fs-7 "> About us</li>
            <li className="FPortfolio fs-7 "> Portfolio</li>
            <li className="FPricing fs-7 "> Pricing</li>
            <li className="FContactUs fs-7 "> Contact us</li>
          </ul>
        </div>
        <div className="col-md-6">
        <ul className="ContactList">
            <li className="Contact fs-4 "> Contact</li>
            <li className="Email fs-7 "> Timori52@gmail.com</li>
            <button className="PagalLund"type="tel"><li className="Number fs-7"> +918755055760</li></button>
            
          </ul>
        
        </div>

      </div>
    </footer>
  );
};

export default Footer;
