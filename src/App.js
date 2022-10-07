import react from "react";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Service from "./component/Service/Service";
import Testimonial from "./component/Testimonial/Testimonial";
const App = ()=>{
  return( 
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Service/>
    <Testimonial/>
    </>
  );
}

export default App;