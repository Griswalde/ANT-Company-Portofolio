import React from 'react'
import "./about.css"
import about from "../../image/about.jpg"
import { FcSlrBackSide,FcOldTimeCamera,FcGallery } from "react-icons/fc";

const About = () => {
  return (
    <div className="container about-section" id="about">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-image">
            <img src={about} height="400px" width="400px" alt="about_iamge" />
          </div>
        </div>

        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-details">
            <div className="about-title">
              <h5>About</h5>
              <span className="line"></span>
            </div>

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
            




          </div>
        </div>
      </div>
    </div>
  );
}

export default About