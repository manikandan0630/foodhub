import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Dishes from "./components/Dishes/Dishes";
import Appstore from "./components/Appstore/Appstore";
import Service from "./components/Services/Services";
import Footer from "./components/Footer/Footer"
const home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Dishes />
      <Appstore />
      <Service />
      <Footer />
    </>
  );
};

export default home;
