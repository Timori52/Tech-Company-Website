import React from 'react'
import border from "./parts/border.png";
import meditationMan from "./parts/meditationMan.png";


const ServiceProvider = () => {
  return (
    <section className='s1'>
    <div className=" text-center services"> 
    <img src={border} alt="" className="aboveServiceBorder img-fluid " />
    <h3 className='h3-heading'> Service we Provide</h3>

    <p className="Service-para">We serve the users in different categories with latest tools</p>

    <img src={meditationMan} alt="meditationMan" className="meditationMan img-fluid" />
    
    </div>
      
    </section>
  )
}

export default ServiceProvider;
