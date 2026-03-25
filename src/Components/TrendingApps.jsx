import React from "react";
import AppCard from "./AppCard";
import { Link } from "react-router";
import useAppData from "../Hooks/useAppData";

const TrendingApps = () => {
  const { appData, loading, error } = useAppData();

  const SlicedData = appData.slice(0, 8);
  return (
    <div className="max-w-full px-10 md:px-14">
      <div className="py-10 md:pb-15">
        <h1 className="text-5xl text-center pb-5 font-bold">Trending Apps</h1>
        <p className="text-md text-center text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
        {SlicedData.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>
      <div className="w-full py-10 flex justify-center">
        <Link
          to="/apps"
          className="btn text-white bg-gradient rounded-md px-10"
        >
          <span className="text-lg">Show All</span>
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;
