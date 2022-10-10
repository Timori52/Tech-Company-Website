import "./components/styles.css";
import React from "react";
import Header from "./components/Header";
import Details from "./components/Details";
import ServiceProvider from "./components/ServiceProvider";
import HowItsWork from "./components/HowItsWork";
import AboveFooter from "./components/AboveFooter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Details />
      <ServiceProvider />
      <HowItsWork/>
      <AboveFooter/>
      <Footer/>
    </>
  );
}

export default App;
