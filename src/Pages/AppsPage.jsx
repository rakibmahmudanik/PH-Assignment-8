import React, { useMemo, useState } from "react";
import useAppData from "../Hooks/useAppData";
import AppCard from "../Components/AppCard";

const AppsPage = () => {
  const { appData } = useAppData();
  const [search, setSearch] = useState("");
  const trimedData = search.trim().toLowerCase();
  const searchedData = useMemo(
    () =>
      trimedData
        ? appData.filter((app) =>
            app.title.trim().toLowerCase().includes(trimedData),
          )
        : appData,
    [appData, trimedData],
  );
  console.log(searchedData);

  return (
    <div className="max-w-full px-10 md:px-14">
      <div className="py-10 md:pb-15">
        <h1 className="text-3xl md:text-5xl text-center pb-5 font-bold">
          Our All Applications
        </h1>
        <p className="text-sm md:text-md text-center text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className=" md:flex justify-between items-center ">
        <p className="text-xl md:text-2xl font-semibold text-center pb-5 md:pb-0">
          ({searchedData.length}) Apps Found
        </p>
        <label className="input rounded-lg bg-transparent w-full md:w-sm">
          <svg
            className="h-[1.5em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="search"
            className="grow"
            placeholder="Search"
          />
        </label>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-5 pb-20">
        {searchedData.length == 0 ? (
          <div>
            <p className="pl-1">No Matches Found</p>
          </div>
        ) : (
          searchedData.map((app) => <AppCard key={app.id} app={app}></AppCard>)
        )}
      </div>
    </div>
  );
};

export default AppsPage;
