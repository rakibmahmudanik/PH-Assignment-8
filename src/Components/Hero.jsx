import React from "react";
import HeroImage from "../assets/hero.png";
import "../index.css";
import Playstore from "../assets/Playstore.webp";
import Appstore from "../assets/Appstore.png";

const Hero = () => {
  return (
    <div className="hero bg-[#F5F5F5] min-h-screen p-20">
      <div className="hero-content text-center flex flex-col">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold text-[#001931]">
            <p className="mb-3 ">We Build </p>
            <span className="font-bold text-gradient">Productive</span> Apps
          </h1>
          <p className="py-6 text-center text-[#627382]">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting.Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
          <div className="flex gap-3 justify-center my-5">
            <button className="btn btn-outline  border-gray-300">
              <img className="w-6" src={Playstore}></img>
              Google Play
            </button>

            <button className="btn btn-outline  border-gray-300">
              <img className="w-6" src={Appstore}></img>
              App Store
            </button>
          </div>
        </div>
        <div>
          <img className="max-w-2xl" src={HeroImage}></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
