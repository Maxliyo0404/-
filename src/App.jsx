import "./App.css";
import React from 'react'
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import SectionOne from "./Components/Main/SectionOne/SectionOne";
import SectionTwo from "./Components/Main/SectionTwo/SectionTwo";
import SectionThree from "./Components/Main/SectionThree/SectionThree";
import SectionFour from "./Components/Main/SectionFour/SectionFour";
import SectionFive from "./Components/Main/SectionFive/SectionFive";
import SectionSix from "./Components/Main/SectionSix/SectionSix";
import SectionSeven from "./Components/Main/SectionSeven/SectionSeven";
import SectionEight from "./Components/Main/SectionEight/SectionEight";

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <SectionSix/>
      <SectionSeven/>
      <SectionEight/>
    </div>
  )
}

export default App