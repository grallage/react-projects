import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/Section/HeroSection/HeroSection";
import InfoSection from "../components/Section/InfoSection/InfoSection";
import Sidebar from "../components/Sidebar/Sidebar";
import ServicesSection from "../components/Section/ServicesSection/ServicesSection";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/Section/InfoSection/Data";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <ServicesSection />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
