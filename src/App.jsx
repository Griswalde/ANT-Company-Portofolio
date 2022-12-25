import React,{useState,createContext} from "react";

import Home from "./component/Home/Home";
import About from "./component/About/About";
import Footer from "./component/Footer/Footer";
import Video from "./component/Video/Video";
import Contact from "./component/Contact/Contact";
import Navbar from "./component/Navbar/Navbar";
import NavbarMobileView from "./component/Navbar/NavbarMobileView";
import Media from "./component/AntMedia/Media";
import Idea from "./component/AntIdea/Idea";


import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";




export const ThemeContext = createContext(null);

const Layout = () => {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <Navbar/>
      <NavbarMobileView/>
  


      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
      <Footer/>
    </div>
  );
}

const NoMatch = () => {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
  }


const App = ()=>{



  return(

   <>
    {/* <Navbar/> */}

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="video" element={<Video/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="media" element={<Media/>}/>
      <Route path="idea" element={<Idea/>}/>
      

      <Route path="*" element={<NoMatch />} />

      </Route>
    </Routes>
    </BrowserRouter>

    

    </>

  );
};

export default App;