import React, {Component} from "react";
import './App.css';

import Header from "./components/Header";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Treatments from "./components/Treatments";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <AboutMe/>
      <Treatments/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default App;
