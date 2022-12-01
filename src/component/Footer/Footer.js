import React from "react";
import "./footer.css";
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className=" footer">
      <div className="row">
        <div className="col-auto me-auto">
          &copy; 2022 Ant Production. All rights reserved
        </div>
        <div className="col-auto">
          <a href="https://www.instagram.com/ant__production/" target="_blank">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
