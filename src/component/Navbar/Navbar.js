import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../image/logo.jpg";
import {
  Link,
} from "react-router-dom";





const Navbar = () => {
  const [navScrollColor, setNavScrollColor] = useState(false);

  const onChangeNavColor = () => {
    if (window.scrollY >= 100) {
      setNavScrollColor(true);
    } else {
      setNavScrollColor(false);
    }
  };

  window.addEventListener("scroll", onChangeNavColor);

  return (
    
    <nav
      className={
        navScrollColor ? "navbar-scroll-color navbar-main " : "navbar-main"
      }
    >
      <div>
        <img src={Logo} alt='Logo Image' style={{ width: '100px' }} />
      </div>
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
            about
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
        <li className="nav-item">
          <Link
            to="video"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            ant production
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
            to="idea"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            
          Ant Idea
          </Link>
          </li>
      </ul>
    </nav>
  );
};
export default Navbar;