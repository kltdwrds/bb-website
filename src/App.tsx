// src/App.tsx
import React from "react";
import "./App.css";
import NavHeader from "./components/NavHeader";
import Hero from "./components/Hero";
import Description from "./components/Description";
import DeerAssets from "./components/DeerAssets";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavHeader />
      <Hero />
      <Description />
      <DeerAssets />
      <Footer />
    </>
  );
}

export default App;
