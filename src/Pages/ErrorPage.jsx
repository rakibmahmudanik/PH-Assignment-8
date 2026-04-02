import React from "react";
import Navbar from "../Components/Navbar";
import errorImg from "../assets/error-404.png";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const nevigate = useNavigate();
  return (
    <div>
      <Navbar></Navbar>

      <div className="hero bg-base-200 min-h-[90vh]">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <img className="mb-10 mx-auto" src={errorImg} width="300px"></img>
            <div>
              <h1 className="text-4xl font-bold">Oops, page not found!</h1>
              <p className="py-3 text-[#627382]">
                The page you are looking for is not available.
              </p>
              <button
                onClick={() => nevigate(-1)}
                className="btn bg-gradient text-white"
              >
                Go Back!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
