import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";
import Fade from 'react-reveal/Fade';







const Home = ({theme,handleChangeTheme}) => {
  return (
    <div className="container-fluid home" id="home">

  

    <Fade left>

    

      <div className="container home-content">
        <h1>ANT</h1>
        <h1>
          <Typewriter
            options={{
              strings: 
              
              ["SYNCHRONOUS IN PURPOSE"],
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
