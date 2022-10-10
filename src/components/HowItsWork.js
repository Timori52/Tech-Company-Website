import React from "react";
import border from "./parts/border.png";
import imageInCircle3 from "./parts/imageInCircle3.png";
import imageInCircle4 from "./parts/imageInCircle4.png";
import imageInCircle1 from "./parts/imageInCircle1.png";
import imageInCircle2 from "./parts/imageInCircle2.png";
import Support from "./parts/Support.png";
import supportSystemImage from "./parts/supportSystemImage.gif";
import firstImage from "./parts/firstImage.png";
import secondImage from "./parts/secondImage.png";
import thirdImage from "./parts/thirdImage.png";

let lets = "Let's See \nHow its works";
let paraTag = "What you get besides \nthe above things";
let para ='About Infenito,\ninsights about us';
let para2 = 'See our latest blogs \nabout stacks'
const HowItsWork = () => {
  return (
    <>
      <section className="LetsSee">
        <div className=" container letsSeeHowItsWork">
          <img
            src={border}
            alt=""
            className="aboveLetsSeeHowItsWorkBorder img-fluid "
          />

          <h3 className="fw-bold ml-3 pt-3  h3-heading-letsHowItsWork">
            {lets}
          </h3>
        </div>
        <section className="container text-center">
          <div className="circles">
            <div className="row">
              <div className=" col-md-3 col-xs-6">
                <div className="circle1">
                  <img src={imageInCircle1} alt="" className="imageInCircle1" />
                </div>
                <p
                  style={{ paddingLeft: "43px" ,lineHeight: '35px' }}
                  className="fw-900 fs-4 text-uppercase  mt-4 Query-Sent "
                >
                  Query Sent
                </p>
              </div>

              <div className=" col-md-3 col-xs-6">
                <div className="circle2 ">
                  <img src={imageInCircle2} alt="" className="imageInCircle2" />
                </div>
                <p
                  style={{ paddingLeft: "43px" }}
                  className="fw-900 fs-4 text-uppercase  mt-4 Designing "
                >
                  Designing
                </p>
              </div>

              <div className=" col-md-3 col-xs-6">
                <div className="circle3">
                  <img src={imageInCircle3} alt="" className="imageInCircle3" />
                </div>
                <p
                  style={{ paddingLeft: "43px" }}
                  className="fw-900 fs-4 text-uppercase  mt-4 Development "
                >
                  Development
                </p>
              </div>

              <div className=" col-md-3 col-xs-6">
                <div className="circle4">
                  <img src={imageInCircle4} alt="" className="imageInCircle4" />
                </div>
                <p
                  style={{ paddingLeft: "43px" }}
                  className="fw-900 fs-4 text-uppercase  mt-4 Production "
                >
                  Production
                </p>
              </div>
            </div>
            <div className="row">
              <div className=" col-md-4">
                <p
                  style={{
                    textAlign: "left",
                    marginTop: "9.625rem",
                    whiteSpace: " pre-wrap",
                  }}
                  className="text-left  fw-500 fs-5 lh-base"
                >
                  {paraTag}
                </p>
              </div>
              <div className="col-md-4">
                <img
                  style={{
                    height: "37px",
                    width: "219px",
                    textAlign: "center",
                    marginTop: "10.625rem",
                    marginRight: "5px",
                  }}
                  src={Support}
                  alt=""
                  className="Support"
                />{" "}
              </div>
              <div className="col-md-4">
                <img
                  style={{ marginTop: "63px", height: "242px" }}
                  src={supportSystemImage}
                  alt=""
                  className="supportSystemImage"
                />{" "}
              </div>
            </div>
          </div>
        </section>
      </section>

      <section>
        <div className="stillHaveADoubtBg container mt-5">
          <p
            style={{ marginTop: "20px" }}
            className="text-center StllHaveADoubtBorder"
          ></p>

          <span
            style={{ marginLeft: "361px", marginTop: "66px" }}
            className="fs-2 fw-700 text-center position-absolute StllHaveADoubt"
          >
            Still have a doubt?
          </span>
          <div className="row">
            <div className="threeImages col-md-4">
              <img
                style={{ width: "260.75px", height: "278.3px" ,borderRadius: '30px',position:"absolute" ,
                left: '112px',
                marginTop: '202px'}}
                src={firstImage}
                alt=""
                className="firstImage"
              />
              <div className="col-md-4">
              <p className="betweenImagePara">{para}</p>
              <p className="betweenParaBorder"></p>
              </div>

            </div>
            <div className="col-md-4">
            <img  style={{ width: "260.75px", height: "278.3px" ,borderRadius: '30px',position:"absolute" ,
            left: '629px',
            marginTop: '202px'
        } } src={secondImage} alt="" className="secondImage" />

        <div className="col-md-4">
        <p className="betweenImagePara2">{para2}</p>
        <p className="betweenParaBorder2"></p>
        
        </div>



            </div>
            <div className="col-md-4">
            <img  style={{ width: "260.75px", height: "278.3px" ,borderRadius: '30px',position:"absolute" ,
            right: '112px',
            marginTop: '202px'
        } } src={thirdImage} alt="" className="thirdImage" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItsWork;
