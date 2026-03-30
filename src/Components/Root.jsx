import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Hero from "./Hero";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-[#F5F5F5]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default Root;
