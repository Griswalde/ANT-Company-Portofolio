import React from "react";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Footer from "./component/Footer/Footer";
import Video from "./component/Video/Video";
import "./App.css";
import ScrollToTop from "react-scroll-to-top";


const App = ()=>{
  return( 
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Video/>
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