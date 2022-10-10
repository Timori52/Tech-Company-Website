import React from "react";
import WhatWeTeach from "./parts/WhatWeTeach.png";
import servicesWeProvide from "./parts/servicesWeProvide.png";


const Details = () => {
  return (
    <>
      <section className="container">
        <p id="head"> See popular tags {"\n"} and browse differnt topics </p>
      </section>



      <section className="container weTeach">
      <div className="row">
        <div className="col-sm-4 col-md-6">
          <img src={WhatWeTeach} alt="WhatWeTeach" className="WhatWeTeach img-fluid" />
        </div>
        
       
       
        <div className="col-sm-4 col-md-6 ">
        
        <img src={servicesWeProvide} alt="" className="serviceProvides img-fluid " />
        </div>
        
        </div>
      </section>
    </>
  );
};

export default Details;
