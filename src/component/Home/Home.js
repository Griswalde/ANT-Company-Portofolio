import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <div className="container-fluid home" id="home">
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
    </div>
  );
};

export default Home;
