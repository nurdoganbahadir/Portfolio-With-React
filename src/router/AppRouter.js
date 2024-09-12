import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "../components/Navbar/MyNavbar";
import Home from "../pages/home/Home";
import Footer from "../components/Footer/Footer";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
