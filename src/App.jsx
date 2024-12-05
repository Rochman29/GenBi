import React from "react";

import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="bg-[#c0b6ac] min-h-screen w-full">
      <Header />
      <Home />
    </div>
  );
}

export default App;
