import React from 'react'
import "./footer.css"
import { AiFillFacebook,AiOutlineInstagram } from "react-icons/ai";




const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <div className="footer-about-section">
              <h6 style={{ color: "white", marginTop: "20px" }}>about</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
              <span className="social-icons">
                <p>
                  <AiFillFacebook size={30} />
                </p>
                <p>
                  <AiOutlineInstagram size={30} />
                </p>
              </span>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <div className="footer-service">
              <h6 style={{ color: "white", marginTop: "20px" }}>Services</h6>
              <div className="footer-item">
                <li>Product sort</li>
                <li>Media Marketing</li>
                <li>Innovation</li>
                <li>Video Sort</li>
                <li>Design</li>
        
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
          <div className="footer-service">
              <h6 style={{ color: "white", marginTop: "20px" }}>Customer</h6>
              <div className="footer-item">
                <li>Log in </li>
                <li>My Account</li>
                <li>Wisth List</li>
                <li>FAQ</li>
                <li>Contact Us</li>
        
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer