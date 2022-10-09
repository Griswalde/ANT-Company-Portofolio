import React from "react";
import "./home.css";
import Typewriter from 'typewriter-effect';
const Home = () => {
  return (
    <div className="container-fluid home" id="home">
      <div className="container home-content">


        <h1>
        <Typewriter
  options={{
    strings: [
      "ANT Production", 
    "ANT Media"],
    autoStart: true,
    loop: true,
    delay: 5
  }}
/>
        </h1>
        <p>

          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <span className="view-detail-home-button"> view Details</span>

      </div>
    </div>
  );
};

export default Home;
