import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "../components/Navbar/MyNavbar";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <MyNavbar />
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
