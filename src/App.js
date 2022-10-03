import react from "react";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import About from "./component/About/About";
const App = ()=>{
  return( 
    <>
    <Navbar/>
    <Home/>
    <About/>
    </>
  );
}

export default App;