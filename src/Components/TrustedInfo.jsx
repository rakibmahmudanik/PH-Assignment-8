import React from "react";
import "../index.css";

const TrustedInfo = () => {
  return (
    <div class="w-full bg-gradient-to-br bg-gradient py-16 px-10 text-center font-sans">
      <h2 class="text-white text-3xl md:text-4xl font-extrabold mb-12 tracking-tight">
        Trusted By Millions, Built For You
      </h2>
      <div class="flex  justify-center items-stretch max-w-5xl mx-auto">
        <div class="flex-1 max-w-75 ">
          <p class="text-white/70 text-[0.8rem] md:text-sm mb-2">
            Total Downloads
          </p>
          <p class="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none mb-2">
            29.6M
          </p>
          <p class="text-white/65 text-[0.7rem] md:text-sm">
            21% More Than Last Month
          </p>
        </div>

        <div class="flex-1 max-w-75">
          <p class="text-white/70 text-[0.8rem] md:text-sm mb-2">
            Total Reviews
          </p>
          <p class="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none mb-2">
            906K
          </p>
          <p class="text-white/65 text-[0.7rem] md:text-sm">
            46% More Than Last Month
          </p>
        </div>

        <div class="flex-1 max-w-75">
          <p class="text-white/70 text-[0.8rem] md:text-sm mb-2">Active Apps</p>
          <p class="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none mb-2">
            132+
          </p>
          <p class="text-white/65 text-[0.7rem] md:text-sm">
            31 More Will Launch
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrustedInfo;
