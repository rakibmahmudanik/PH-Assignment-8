import React from "react";
import logo from "../assets/logo.png";

const LoadingSpinner = () => {
  return (
    <div class="flex-col gap-4 w-full min-h-screen flex items-center justify-center">
      <div class="w-20 h-20 border-6 animate-spin border-gray-300 flex items-center justify-center border-t-blue-300 rounded-full">
        <img className="w-6 ml-3 animate-ping " src={logo}></img>
      </div>
    </div>
  );
};

export default LoadingSpinner;
