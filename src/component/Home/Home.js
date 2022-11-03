import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";
import Fade from 'react-reveal/Fade';
import { BsMoonStarsFill,BsFillSunFill } from "react-icons/bs";






const Home = ({theme,handleChangeTheme}) => {
  return (
    <div className="container-fluid home" id="home">

  <div className="theme-change" onClick={()=> handleChangeTheme()}>
    {theme === "light" ? (
      <p>
        <BsMoonStarsFill size={40}/>
      </p>
    ) : (
      <p>
        <BsFillSunFill size={40}/>
      </p>
    )}

  </div>


    <Fade left>

    

      <div className="container home-content">
        <h1>
          <Typewriter
            options={{
              strings: ["SYNCHRONOUS IN PURPOSE"],
              autoStart: true,
              loop: true,
              delay: 5,
            }}
          />
        </h1>

      
        
      </div>
      </Fade>
    </div>
  );
};

export default Home;
