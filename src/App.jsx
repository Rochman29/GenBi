import React from "react";
import HomePages from "./pages/HomePages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StuntingPages from "./pages/StuntingPages";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import PencegahanPages from "./pages/PencegahanPages";
import DataPages from "./pages/DataPages";
import FeedbackPages from "./pages/FeedbackPages";

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/home" element={<HomePages />}></Route>
        <Route path="*" element={<HomePages />}></Route>
        <Route path="/" element={<HomePages />}></Route>
        <Route path="/stunting" element={<StuntingPages />}></Route>
        <Route path="/data" element={<DataPages />}></Route>
        <Route path="/pencegahan" element={<PencegahanPages />}></Route>
        <Route path="/feedback" element={<FeedbackPages />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
