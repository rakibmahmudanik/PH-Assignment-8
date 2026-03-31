import React, { useEffect, useState } from "react";
import List from "../Components/List";
import { toast } from "react-toastify";

const InstalledPage = () => {
  const [installedApp, setInstalledApp] = useState([]);
  const [sortedApp, setSortedApp] = useState("Sort By ( Download )");
  useEffect(() => {
    const existingApp = JSON.parse(localStorage.getItem("Installed"));
    if (existingApp) setInstalledApp(existingApp);
  }, []);

  const handleSort = (() => {
    if (sortedApp === "sort-high") {
      return installedApp.sort((a, b) => b.downloads - a.downloads);
    } else if (sortedApp === "sort-low") {
      return installedApp.sort((a, b) => a.downloads - b.downloads);
    } else {
      return installedApp;
    }
  })();

  const listRemove = (id) => {
    const existingApp = JSON.parse(localStorage.getItem("Installed")) || [];
    const filteredList = existingApp.filter((p) => p.id !== id);
    setInstalledApp(filteredList);
    localStorage.setItem("Installed", JSON.stringify(filteredList));
    toast.success("App Unistalled Succesfully!");
  };

  return (
    <div className="max-w-full p-10 md:p-14">
      <div className="py-10 md:pb-15">
        <h1 className="text-3xl md:text-5xl text-center pb-5 font-bold">
          Your Installed Apps
        </h1>
        <p className="text-sm md:text-md text-center text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className=" flex justify-between items-center ">
        <p className="text-xl md:text-2xl font-semibold text-center">
          ({handleSort.length}) Apps Found
        </p>
        <select
          defaultValue="Sort By ( Download )"
          onChange={(e) => setSortedApp(e.target.value)}
          className="select w-50 text-[#627382] cursor-pointer"
        >
          <option disabled={true}>Sort By ( Download )</option>
          <option value="sort-high">High-Low</option>
          <option value="sort-low">Low-High</option>
        </select>
      </div>
      {handleSort.map((listApp) => (
        <List key={listApp.id} listApp={listApp} listRemove={listRemove}></List>
      ))}
    </div>
  );
};

export default InstalledPage;
