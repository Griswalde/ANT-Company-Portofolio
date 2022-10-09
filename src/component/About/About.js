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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
            {/* about pertama card design */}
            <div className="card-design">
              <div className="about-list-item">

                <div className="about-details-icon">
                  <p>
                    <FcSlrBackSide size={50}/>
                  </p>
                </div>
                <div>
                  <h6>Perfect day out</h6>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>

            {/* about kedua card design  */}
            <div className="card-design">
              <div className="about-list-item">

                <div className="about-details-icon">
                  <p>
                    <FcOldTimeCamera size={50}/>
                  </p>
                </div>
                <div>
                  <h6>Perfect day out</h6>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>



            {/* about ke tiga card design */}
            <div className="card-design">
              <div className="about-list-item">

                <div className="about-details-icon">
                  <p>
                    <FcGallery size={50}/>
                  </p>
                </div>
                <div>
                  <h6>Perfect day out</h6>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>




          </div>
        </div>
      </div>
    </div>
  );
}

export default About