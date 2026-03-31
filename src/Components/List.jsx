import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faStar } from "@fortawesome/free-solid-svg-icons";

const List = ({ listApp, listRemove }) => {
  const handleFormatDownload = (num) => {
    if (num >= 1000000000)
      return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "B";
    if (num >= 1000000)
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    return num.toString();
  };

  const [isUnistal, setIsUnistall] = useState(false);

  const handleRemove = (id) => {
    setIsUnistall(true);

    setTimeout(() => {
      listRemove(id);
    }, 1500);
  };
  return (
    <div>
      <ul className="list bg-base-100 rounded-box shadow-sm my-4">
        <li className="list-row items-center">
          <div>
            <img
              className="size-20 rounded-box object-cover"
              src={listApp.image}
            />
          </div>
          <div>
            <div className="mb-2 text-xl font-semibold">{listApp.title}</div>
            <div className="text-xs uppercase font-semibold opacity-60 flex items-center ">
              <span class="inline-flex items-center gap-1 text-green-600 text-xs font-medium px-2.5 py-1 rounded-md">
                <FontAwesomeIcon icon={faDownload} />
                {handleFormatDownload(listApp.downloads)}
              </span>

              <span class="inline-flex items-center gap-1 text-amber-500 text-xs font-medium px-2.5 py-1 rounded-md">
                <FontAwesomeIcon icon={faStar} /> {listApp.ratingAvg}
              </span>

              <span className="text-[#627382]">{listApp.size} MB</span>
            </div>
          </div>
          <button
            onClick={() => handleRemove(listApp.id)}
            className="btn bg-[#00D390] text-white"
          >
            {isUnistal ? "Unistaling..." : "Unistall"}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default List;
