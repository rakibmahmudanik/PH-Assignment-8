import React from "react";
import useAppData from "../Hooks/useAppData";

import "../index.css";
import RatChart from "../Components/RatChart";
import LoadingSpinner from "../Components/LoadingSpinner";
import AppDetailsHeader from "../Components/AppDetailsHeader";
import { useParams } from "react-router";
import AppNotFundPage from "./AppNotFundPage";

const AppDetails = () => {
  const { id } = useParams();

  const { appData, loading, error } = useAppData();
  const thisApp = appData.find((d) => d.id == id);

  if (loading) return <LoadingSpinner />;
  if (error) return <p>{error}</p>;
  // if (!thisApp) return <AppNotFundPage />;

  const { description } = thisApp || {};

  return (
    <div>
      <div class=" max-w-full p-10 md:p-14">
        <AppDetailsHeader appData={appData}></AppDetailsHeader>
        <hr class="border-gray-300  mb-10" />

        <div className="mb-10">
          <RatChart thisApp={thisApp}></RatChart>
        </div>

        <hr class="border-gray-300 mt-20 mb-10" />

        <div>
          <h1 className="font-bold text-xl mb-3">Description</h1>

          <p className="text-gray-600 text-sm mb-3">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
