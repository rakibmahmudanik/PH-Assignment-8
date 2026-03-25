import React from "react";
import HeroImage from "../assets/hero.png";
import "../index.css";
import Playstore from "../assets/Playstore.webp";
import Appstore from "../assets/Appstore.png";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="hero bg-[#F5F5F5] min-h-auto pt-5 md:px-20 md:pt-20">
      <div className="hero-content  max-w-xl md:max-w-4xl text-center flex flex-col pb-0 ">
        <div className="">
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
            <a
              href="https://play.google.com/store/apps"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline  border-gray-300"
            >
              <img className="w-6" src={Playstore}></img>
              Google Play
            </a>

            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline  border-gray-300"
            >
              <img className="w-6" src={Appstore}></img>
              App Store
            </a>
          </div>
        </div>
        <div>
          <img className="max-w-auto md:max-w-2xl" src={HeroImage}></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
