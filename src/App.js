import React,{useState,createContext} from "react";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Footer from "./component/Footer/Footer";
import Video from "./component/Video/Video";
import NavbarMobileView from "./component/Navbar/NavbarMobileView";
import Contact from "./component/Contact/Contact";
import "./App.css";
import ScrollToTop from "react-scroll-to-top";


export const ThemeContext = createContext(null);


const App = ()=>{

  const[theme, setTheme] = useState("light");

  const handleChangeTheme = ()=> {
    setTheme((current)=> (current === "light" ? "dark":"light" ));
  }


  return( 
    <ThemeContext.Provider value={{ theme, handleChangeTheme}}>
    <Navbar/>
    <NavbarMobileView theme={theme} handleChangeTheme={handleChangeTheme}/>
    <Home theme={theme} handleChangeTheme={handleChangeTheme}/>

    <div className="main-theme-compo" id={theme}>

    <About/>
    <Video/>
    <Contact/>
    
    </div>
    <Footer/>
   

    <ScrollToTop smooth 
    color= "white"
    height = "20"
    width="20"
    style={{ borderRadius:"90px",backgroundColor: "#38004c" }}
    />
    </ThemeContext.Provider>
  );
};

export default App;