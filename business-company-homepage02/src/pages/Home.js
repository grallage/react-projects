import React from "react";
import "../App.css";
import Cards from "../components/cards/Cards";
import Footer from "../components/footer/Footer";
import HeroSection from "../components/section/HeroSection";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
