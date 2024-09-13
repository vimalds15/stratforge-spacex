import React from "react";
import { FALLBACK_ROCKET_IMAGE } from "../constants/constant";
import { Link } from "react-router-dom";
import { convertToLocalDate } from "../utils";

const HistoryCard: React.FC<{
  title: string;
  details: string;
  event_date: string;
  link: string;
}> = ({ title, details, event_date, link }) => {
  return (
    <div className="flex items-center justify-between p-4 w-[80%] border-2 cursor-pointer rounded-md overflow-hidden">
      <div className="w-[75%]">
        <p className="font-bold">{title}</p>
        <p className="font-bold text-sm text-zinc-700">
          Published Date: {convertToLocalDate(event_date)}
        </p>
        <p className="line-clamp-2 text-sm mt-2">{details}</p>
      </div>
      <div className="bg-black px-2 py-2 rounded-md hover:bg-zinc-800 transition-all">
        <a href={link} target="_blank">
          <p className="text-zinc-100 text-sm font-semibold">Learn More</p>
        </a>
      </div>
    </div>
  );
};

export default HistoryCard;
