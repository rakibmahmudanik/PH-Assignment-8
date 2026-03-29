import React from "react";
import { useParams } from "react-router";
import useAppData from "../Hooks/useAppData";
import ReviewsIcon from "../assets/Vector.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faStar } from "@fortawesome/free-solid-svg-icons";

import "../index.css";
import { useState } from "react";
import { useEffect } from "react";

const AppDetails = () => {
  const { id } = useParams();

  const { appData, loading, error } = useAppData();
  const [isInstalled, setIsInstalled] = useState(false);

  const thisApp = appData.find((d) => d.id == id);

  const handleFormat = (num) => {
    if (num >= 1000000000)
      return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "B";
    if (num >= 1000000)
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    return num.toString();
  };

  useEffect(() => {
    if (!thisApp) return;
    const existingApp = JSON.parse(localStorage.getItem("Installed")) || [];
    const found = existingApp.some((item) => item.id === thisApp.id);
    setIsInstalled(found);
  }, [thisApp]);

  if (loading) return <p>Loading.....</p>;
  if (error) return <p>{error}</p>;

  const {
    title,
    description,
    image,
    companyName,
    downloads,
    reviews,
    ratingAvg,
    size,
  } = thisApp || {};

  const handleInstalled = () => {
    const existingApp = JSON.parse(localStorage.getItem("Installed")) || [];
    const alreadyInstalled = existingApp.some((item) => item.id === thisApp.id);
    console.log(existingApp);

    if (alreadyInstalled) {
      return;
    }

    let updatedItem = [];
    if (existingApp) {
      updatedItem = [...existingApp, thisApp];
    } else {
      updatedItem.push(thisApp);
    }
    localStorage.setItem("Installed", JSON.stringify(updatedItem));
    setIsInstalled(true);
  };

  return (
    <div>
      <div class=" max-w-full p-10 md:p-14">
        <div class=" rounded-2xl flex items-start gap-10">
          <div class="w-3/12 h-full aspect-square bg-gray-300 rounded-sm overflow-hidden">
            <img src={image} alt="icon" class="w-full h-full object-cover" />
          </div>

          <div class="flex flex-col  items-start">
            <div>
              <h2 class="text-3xl font-extrabold text-gray-900 mb-1">
                {title}
              </h2>
              <p class="text-lg text-[#627382] mb-4">
                Developed by{" "}
                <span class="text-gradient font-medium">{companyName}</span>
              </p>

              <hr class="border-gray-300 my-7" />
            </div>

            <div class="flex items-center justify-baseline gap-15 mb-8">
              <div class="flex items-start flex-col gap-2">
                <FontAwesomeIcon
                  size="xl"
                  icon={faDownload}
                  className="text-[#00D390] "
                />

                <span class="text-md text-gray-500 ">Downloads</span>
                <span class="text-2xl font-extrabold text-gray-900">
                  {handleFormat(downloads)}
                </span>
              </div>

              <div class="flex flex-col items-start gap-2">
                <FontAwesomeIcon
                  size="xl"
                  icon={faStar}
                  className="text-[#FF8811]"
                />
                <span class="text-md text-gray-500">Average Ratings</span>
                <span class="text-2xl font-extrabold text-gray-900">
                  {ratingAvg}
                </span>
              </div>

              <div class="flex flex-col gap-2">
                <img className="w-7" src={ReviewsIcon}></img>
                <span class="text-md text-gray-500 ">Total Reviews</span>
                <span class="text-2xl font-extrabold text-gray-900">
                  {handleFormat(reviews)}
                </span>
              </div>
            </div>

            <button
              onClick={handleInstalled}
              disabled={isInstalled}
              class={`bg-[#00D390] text-white text-sm font-semibold px-7 py-2.5 rounded-md cursor-pointer ${isInstalled ? "bg-gray-400 text-black " : ""}`}
            >
              {isInstalled ? "Installed" : `Install Now (${size} MB)`}
            </button>
          </div>
        </div>
        <hr class="border-gray-300 my-20" />

        <div>
          <h1 className="font-bold text-xl mb-3">Description</h1>
          {description.split("\n\n").map((para, index) => (
            <p key={index} className="text-gray-600 text-sm mb-3">
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
