import React from "react";
import { FALLBACK_ROCKET_IMAGE } from "../constants/constant";
import { Link } from "react-router-dom";

const RocketCard: React.FC<{
  id: string;
  title: string;
  description: string;
  company: string;
  image: string;
}> = ({ id, title, description, company, image }) => {
  const rocketImage = image?.includes("imgur") ? FALLBACK_ROCKET_IMAGE : image;

  return (
    <Link to={`/rockets/${id}`}>
      <div className="max-w-[260px] border-2 cursor-pointer rounded-md overflow-hidden">
        <img
          src={rocketImage}
          alt="rocket image"
          className="h-52 w-full object-cover"
        />
        <div className="p-3">
          <p className="font-bold">{title}</p>
          <p className="font-bold text-sm text-zinc-700">{company}</p>
          <p className="line-clamp-2 text-sm mt-2">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default RocketCard;
