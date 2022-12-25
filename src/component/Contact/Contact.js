import React from "react";
import Fade from "react-reveal/Fade";
import "./contact.css";
import { AiFillMail } from "react-icons/ai";
import { BiMap } from "react-icons/bi";


const Contact = () => {
  return (
    <div className="container map-section">
      <div className="about-title">
        <h5>Contact Us</h5>
        <span className="line"></span>
      </div>
      <br />
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.200243784582!2d107.52298013488769!3d-6.866591699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e548c2740a2d%3A0x8d08d7c1715a3338!2sAnt%20Production!5e0!3m2!1sen!2sus!4v1671930643671!5m2!1sen!2sus"
            width="100%"
            height="600px"
            style={{ boreder: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="contact-details">
            <br />
            <p>Ant Production</p>
            <p>
            <BiMap size={20}/>
              Komplek KCVRI No. 2 Cipageran Cimahi Utara 40511</p>
            <p>
              <AiFillMail size={20}  />
              contact.antproduction@gmail.com
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
