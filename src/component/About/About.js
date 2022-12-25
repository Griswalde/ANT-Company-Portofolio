import React from 'react'
import "./about.css"
import about from "../../image/about.JPG"
import Fade from 'react-reveal/Fade';
import { FaWhatsapp } from "react-icons/fa";


const About = () => {
  return (
    <div className="container about-section">
      <div className="about-title">
              <h5>About</h5>
              <span className="line"></span>
            </div>
            <br/>
      <div className="row">

        <Fade left>


        

        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">

          <div className="about-image">
            <img src={about} height="400px" width="400px" alt="about_iamge" />
          </div>


        </div>

        </Fade>
        <Fade right>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-details">
            

            <p>
            <p>
          Technological advances affect the field of photography and videography
          to become increasingly advanced. This affects industries where the
          need for high-quality photos and videos is made easier. Ant Production
          is built to always be ready to accompany technological advances on the
          need for high-quality photos and videos
          <br></br>
          
        
          The progress of various industries such as e-commerce, social media
          promotion, and product advertising is also the impact of technological
          advances accompanied by the need for high-quality photos and videos.
          For this reason, Ant Production is ready to collaborate with various
          parties to work and achieve the intended goals together.
        </p>
            </p>
            <div className="submit-button"> 
           
              
              <a href="https://api.whatsapp.com/send?phone=6285794692616&text=halo%20saya%20ingin%20mendiskusikan%20kebutuhan%20saya" target="_blank">
            
            
            <button>
               <FaWhatsapp size={30} /> 
              Contact Whatsapp
              </button>
              </a>
              </div>
            




          </div>
        </div>
        


        </Fade>

      </div>
    </div>
  );
}

export default About