import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import { handleFormat } from "../Utils/Formater";

const AppCard = ({ app }) => {
  return (
    <Link to={`/details/${app.id}`} className="hover-3d cursor-pointer">
      <div class="max-w-full bg-white rounded-[10px] border border-gray-200 overflow-hidden">
        <div class="p-3 pb-0">
          <div class="w-full aspect-square bg-gray-300 rounded-[14px] overflow-hidden">
            <img className="w-full h-full object-cover" src={app.image}></img>
          </div>
        </div>

        <div class="p-3">
          <p class="text-[14px] font-bold text-gray-900 leading-snug mb-2.5">
            {app.title}
          </p>
          <div class="flex items-center justify-between">
            <span class="inline-flex items-center gap-1 bg-green-50 text-green-600 text-xs font-medium px-2.5 py-1 rounded-md">
              <FontAwesomeIcon icon={faDownload} />
              {handleFormat(app.downloads)}
            </span>

            <span class="inline-flex items-center gap-1 bg-amber-50 text-amber-500 text-xs font-medium px-2.5 py-1 rounded-md">
              <FontAwesomeIcon icon={faStar} /> {app.ratingAvg}
            </span>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Link>
  );
};

export default AppCard;
