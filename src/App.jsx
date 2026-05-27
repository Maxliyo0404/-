import "./App.css";
import React from 'react'
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import SectionOne from "./Components/Main/SectionOne/SectionOne";
import SectionTwo from "./Components/Main/SectionTwo/SectionTwo";
import SectionThree from "./Components/Main/SectionThree/SectionThree";
import SectionFour from "./Components/Main/SectionFour/SectionFour";

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
    </div>
  )
}

export default App