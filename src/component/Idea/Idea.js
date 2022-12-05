import React from "react";
import "./idea.css";
import Typewriter from "typewriter-effect";
import LightSpeed from 'react-reveal/LightSpeed';







const Home = ({theme,handleChangeTheme}) => {
  return (
    <div className="container-fluid soon">

  

    <LightSpeed left cascade>

    

      <div className="container soon-content">
        <h1>COMING SOON</h1>
      

      
        
      </div>
      </LightSpeed>
    </div>
  );
};

export default Home;
