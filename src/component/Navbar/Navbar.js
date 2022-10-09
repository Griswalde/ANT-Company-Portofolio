import React,{useState} from "react";
import "./navbar.css";
import {Link} from 'react-scroll';

const Navbar = () => {

  const[navScrollColor,setNavScrollColor] = useState(false);

  const onChangeNavColor = ()=> {

    if (window.scrollY>=100){
    setNavScrollColor(true)
  }else {
    setNavScrollColor(false);
  }
};

window.addEventListener("scroll",onChangeNavColor);


  return (
    <nav className={navScrollColor ? "navbar-scroll-color navbar-main ":"navbar-main"}>


      <ul>
        <li className="nav-item">
        <Link to="home" spy={true} smooth={true} offset={-100} 
        duration={100} >
          Home
        </Link>
          </li>
          
          <li className="nav-item">
        <Link to="about" spy={true} smooth={true} offset={-100} 
        duration={100} >
          about
        </Link>
        </li>
        
        
        

        <li className="nav-item">Carrer</li>

        <li className="nav-item">Video</li>

        <li className="nav-item">Team</li>

        <li className="nav-item">
        <Link to="testimonial" spy={true} smooth={true} offset={-100} 
        duration={100} >
          testimonial
        </Link>
        </li>

        <li className="nav-item">Feedback</li>

        <li className="nav-item">Contact</li>

        <li className="nav-item">Subs</li>
      </ul>
    </nav>
  );
};
export default Navbar;
