import React from "react";

import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import DaftarIsi from "./components/DaftarIsi";

function App() {
  return (
    <div className="bg-[#fbf5db] min-h-screen w-full">
      <Header />
      <Home />
      <DaftarIsi />
    </div>
  );
}

export default App;
