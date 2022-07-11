import React from "react";
import About from "./Components/About";
import Brand from "./Components/Brand";
import Contact from "./Components/Contact";
import Furniture from "./Components/Furniture";
import Home from "./Components/Home";
import Partner from "./Components/Partner";

function App() {
  return (
    <div className="sm:overflow-y-auto">
      <Home />
      <Furniture />
      <About />
      <Partner />
      <Brand />
      <Contact />
    </div>
  );
}

export default App;
