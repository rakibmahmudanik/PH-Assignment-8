import React from "react";
import { useNavigate } from "react-router";
import Notfundimg from "../assets/App-Error.png";

const AppNotFundPage = () => {
  const nevigate = useNavigate();

  return (
    <div>
      <div className="hero bg-base-200 min-h-[90vh]">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <img className="mb-10 mx-auto" src={Notfundimg} width="300px"></img>
            <div>
              <h1 className="text-4xl font-bold">OPPS!! APP NOT FOUND</h1>
              <p className="py-3 text-[#627382]">
                The App you are requesting is not found on our system. please
                try another apps
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

export default AppNotFundPage;
