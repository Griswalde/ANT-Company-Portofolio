import React from "react";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Service from "./component/Service/Service";
import Testimonial from "./component/Testimonial/Testimonial";
import Subscription from "./component/Subscription/Subscription";
import Footer from "./component/Footer/Footer";
import "./App.css";
import ScrollToTop from "react-scroll-to-top";


const App = ()=>{
  return( 
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Testimonial/>
    <Subscription/>
    <Footer/>


    <ScrollToTop smooth 
    color= "white"
    height = "20"
    width="20"
    style={{ borderRadius:"90px",backgroundColor: "#38004c" }}
    />
    </>
  );
};

export default App;