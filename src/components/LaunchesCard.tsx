import React, { Ref, forwardRef } from "react";
import { FALLBACK_ROCKET_IMAGE } from "../constants/constant";
import { Link } from "react-router-dom";
import { convertToLocalDate } from "../utils";

const LaunchCard: React.FC<{
  id: string;
  title: string;
  date: string;
  details: string;
  image: string;
}> = forwardRef(({ id, title, date, details, image }, ref) => {
  const rocketImage = image?.includes("imgur") ? FALLBACK_ROCKET_IMAGE : image;

  return (
    <Link to={`/launches/${id}`}>
      <div
        ref={ref}
        className="w-[260px]  min-h-[340px] border-2 cursor-pointer rounded-md overflow-hidden"
      >
        <img
          src={rocketImage}
          alt="rocket image"
          className="h-52 w-full object-contain mt-2"
        />
        <div className="p-3 mt-2">
          <p className="line-clamp-1 font-bold">{title}</p>
          <p className="font-bold text-sm text-zinc-700">
            Launch Date: {convertToLocalDate(date)}
          </p>
          <p className="line-clamp-2 text-sm mt-2">{details}</p>
        </div>
      </div>
    </Link>
  );
});

export default LaunchCard;
