import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "../components/Navbar/MyNavbar";
import Home from "../pages/home/Home";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
