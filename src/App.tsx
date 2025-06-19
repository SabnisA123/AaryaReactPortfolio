import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./components/atoms/header/Header";
import BannerSection from "./components/molecules/bannerSection/BannerSection";
import AboutMe from "./components/molecules/aboutMe/AboutMe";
import ProjectSection from "./components/molecules/projects/ProjectSection";
import SkillSection from "./components/organisms/SkillSection";
import ContactSection from "./components/organisms/contactSection/ContactSection";
import EducationSection from "./components/organisms/education/EducationSection";
import ExperienceSection from "./components/organisms/experience/ExperienceSection";

function App() {
  const [state, setState] = useState(0);
  // useEffect(() => {
  //   alert("hello ");
  // }, []);
  // useEffect(() => {
  //   alert("hello ");
  // }, []);
  // useEffect(() => {
  //   alert("hello state");
  // }, [state]);
  //  useEffect(() => {
  //   alert("hello state updated");
  // }, [state+1]);
  // const handleClick = () => {
  //   setState(state+1);
  // };
  return (
    <>
      <div className="main-container">
        <Header />
        <BannerSection />
        <AboutMe />
        <ExperienceSection/>
        {/* <EducationSection/> */}
        <SkillSection />
        <ProjectSection />
        <ContactSection />
        {/* <h1>Count: {state}</h1>
        <button onClick={handleClick}>Click Me</button> */}
      </div>
    </>
  );
}

export default App;
