import React, { useState } from "react";
import contactUs from "./parts/contactUs.gif";
import instagram from "./parts/instagram.png";
import twitter from "./parts/twitter.png";
import linkedin from "./parts/linkedin.png";

let letsBuild = "Let’s Buid Something \nAWESOME!";
let paragraph =
  " One of the Tech Experts will reach out to you within \n next 48 business hours.";

const AboveFooter = () => {
  const [sendButton1, setSendButton1] = useState("send");

  function onCick() {
    setSendButton1("Message sent!");
  }

  return (
    <>
      <section className="container">
        <p className="BuildSomething"></p>
        <p className="fw-700 fs-4 mt-2  LetsBuildPara">{letsBuild}</p>
        <span className=" paragraph ">{paragraph}</span>

        <span className="row">
          <div className="col-md-6">
            <img
              style={{
                width: "408.52px",
                height: "360.52px",
                position: "absolute",
                marginTop: "150px",
                marginLeft: "150px",
              }}
              src={contactUs}
              alt=""
              className=" contactUs "
            />
          </div>
          <div className="col-md-6 form">
            <div className="AllFormMaterial mx-5">
              <p className="DropAmessage mt-5  fs-4 text-lowercase text-capitalize">
                drop us a message
              </p>
              <p className="LoveToHear text-lowercase mt-4 ">
                We would love to hear everything from you
              </p>
              <div className="chutiya">
                <div className="mb-3">
                  <label htmlFor="formGroupExampleInput" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="formGroupExampleInput2"
                    className="form-label"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Your email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="formGroupExampleInput" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="What is related to this?"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="formGroupExampleInput2"
                    className="form-label"
                  >
                    Contact number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Your Contact number"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Message description"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <button
                    style={{
                      width: "130px",
                      backgroundColor: "black",
                      whiteSpace: "nowrap",
                      textAlign: "center",
                    }}
                    onClick={onCick}
                    type="button"
                    className="sendButton btn-dark p-3"
                  >
                    {sendButton1}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </span>
        <span className="followUsOn fs-5 fw-700 mt-3"> Follow us on</span>
        <div
          style={{
            position: "relative",
            top: "-96px",
            left: "0px",
            height: "97px",
          }}
          className="d-flex  py-2"
        >
          <a
            href="https://www.instagram.com/____.sumit.___/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            
            <img src={instagram} alt="" className="instagram m-4  " />
          </a>
          <a href="/" data-toggle="tooltip" title="Sorry! Not on Twitter">
            
            <img src={twitter} alt="" className="twitter m-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/sumit-timori-bbb541154/"
            target="_blank"
            rel="noopener noreferrer"
          >
            
            <img src={linkedin} alt="" className="linkedin m-4" />
          </a>
        </div>
      </section>
    </>
  );
};

export default AboveFooter;
