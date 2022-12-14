import React, { useState } from "react";
import "./navbarmobileview.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import Switch from "react-switch";

const NavbarMobileView = ({ theme, handleChangeTheme }) => {
  const [open, setOpen] = useState(false);

  const handeNavbaropen = () => {
    setOpen(!open);
  };

  return (
    <div className="responsive-mobile-view">
      <div className="container-fluid mobile-view-header">
        <p>
          <GiHamburgerMenu size={25} onClick={handeNavbaropen} />
        </p>
      </div>

      {open ? (
        <div className="mobile-nav">
          <ul>
          <li className="nav-item">
          <Link to="/" spy={true} smooth={true} offset={-100} duration={100}>
            Home
          </Link>
        </li>
          <li className="nav-item">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            About
          </Link>
        </li>
        
        <li className="nav-item">
          <Link
            to="video"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            Ant production
          </Link>
        </li>

        

       
        <li className="nav-item">
        <Link
            to="idea"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            
          Ant idea
          </Link>
          </li>
        <li className="nav-item">
        <Link
            to="media"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            
          Ant Media
          </Link>
          </li>
          <li className="nav-item">
        <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            
          Contact
          </Link>
          </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default NavbarMobileView;
