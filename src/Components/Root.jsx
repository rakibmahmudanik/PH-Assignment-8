import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Hero from "./Hero";
import Footer from "./Footer";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-[#F5F5F5]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
