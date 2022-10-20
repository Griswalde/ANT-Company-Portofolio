import React,{useState} from "react";
import "./navbarmobileview.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";

const NavbarMobileView = () => {

    const [open,setOpen] = useState(false);

    const handeNavbaropen = ()=>{
        setOpen(!open)
    };


  return (
    <div className="responsive-mobile-view">
      <div className="container-fluid mobile-view-header">
        <p>
          <GiHamburgerMenu size={25} onClick={handeNavbaropen} />
        </p>
      </div>

      {open? (<div className="mobile-nav">
        <ul>
          <li className="nav-item">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
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
              to="video"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              video
            </Link>
          </li>

          <li className="nav-item">Contact</li>
        </ul>
      </div>
      ):null}

      
    </div>
  );
};

export default NavbarMobileView;
