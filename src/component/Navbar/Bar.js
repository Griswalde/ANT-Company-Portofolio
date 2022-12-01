import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./bar.css";
import { FaBars} from "react-icons/fa"
import { ImCross} from "react-icons/im"
import Logo from "../../image/logo.jpg";

const Bar = () => {

  
  
  return (
    <nav className="navbar">
       <div>
        <img src={Logo} alt='Logo Image' style={{ width: '200px' }} />
      </div>

      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/video">
          <li>Video</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <Link to="/team">
          <li>Team</li>
        </Link>
        <Link to="/gallery">
          <li>gallery</li>
        </Link>
      </ul>
      
    </nav>
    
  );
};

export default Bar;
