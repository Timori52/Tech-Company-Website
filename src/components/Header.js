import React from "react";
import curveimage from "./parts/curveimage.png";
import logo2 from "./parts/logo2.png";
import infenito from "./parts/infenito.png";
import studyImage from "./parts/studyImage.png";
import EllipseOuter from "./parts/EllipseOuter.png";
import EllipseInner from "./parts/EllipseInner.png";

const text = "We power brands \n to build big!";

const Header = () => {
  return (
    <> <section className="container ">
      <nav className="navbar navbar-expand-lg bg-transparent">
        <div className="container-fluid">
          

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active mx-3 px-4 mb-5" id="home" aria-current="page" href="/">
                Home
              </a>
              <a className="nav-link px-4  mx-3 mb-5" id="portfolio" href="/portfolio">
                portfolio
              </a>
              <a className="nav-link px-4  mx-3 mb-5"  id="about" href="/about">
                about us
              </a>
              <a className="nav-link px-4 mx-3 mb-5"  id="pricing" href="/pricing">
                pricing
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="rectangle">
        <img src={curveimage} alt="rectangle" className="myRectangle img-fluid" />
        <img src={logo2} alt="" className="src1 img-fluid" />
        <img src={infenito} alt="" className="src2 img-fluid" />
        <h5> Welcome to Infenito </h5>
        <h1> {text} </h1>

        <button type="button" className="btn1 img-fluid" > 
          Join Us
        </button>
      </div>

      
      <div className="studyImage"> 
      <img src={studyImage} alt="" className="src3 img-fluid" /></div>
      <div className="ellipse">
      <img src={EllipseInner} alt="" className=" EllipseInner img-fluid" />
      <img src={EllipseOuter} alt="" className= "EllipseOuter img-fluid"/>
    </div> </section> </>
  );
};

export default Header;
