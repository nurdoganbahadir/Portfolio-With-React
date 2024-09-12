import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "../components/Navbar/MyNavbar";
import Home from "../pages/home/Home";
import Footer from "../components/Footer/Footer";
import About from "../pages/about/About";
import Projects from "../pages/projects/Projects";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
