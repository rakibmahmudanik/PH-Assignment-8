import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Hero from "./Hero";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="bg-[#F5F5F5]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
