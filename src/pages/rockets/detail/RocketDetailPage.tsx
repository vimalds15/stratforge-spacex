import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRocketById } from "../../../api/rockets";
import { FALLBACK_ROCKET_IMAGE } from "../../../constants/constant";
import { ImageCarousel } from "../../../components";
import { getValidImages } from "../../../utils";

const RocketDetailPage: React.FC = () => {
  const [rocket, setRocket] = useState({});
  const { id } = useParams();

  const validImages = getValidImages(rocket?.flickr_images);


  const fetchRocketData = async (id) => {
    const { data } = await fetchRocketById(id);
    setRocket(data);
  };

  useEffect(() => {
    fetchRocketData(id);
  }, [id]);

  return (
    <div>
      {validImages?.length > 0 ? (
        <ImageCarousel images={validImages} />
      ) : (
        <img
          src={FALLBACK_ROCKET_IMAGE}
          className="w-full h-[400px] object-cover"
        />
      )}
      <div className="flex flex-col gap-2 p-4 ">
        <p className="text-2xl font-bold text-center mb-4">{rocket?.name}</p>
        <p className="text-lg">
          <span className="font-bold">Company:</span> {rocket?.company}
        </p>
        <p className="text-lg">
          <span className="font-bold">Cost:</span> {rocket?.cost_per_launch} USD
        </p>
        <p className="text-lg">
          <span className="font-bold">Country:</span> {rocket?.country}
        </p>
        <p className="text-lg">
          <span className="font-bold">Description:</span> {rocket?.description}
        </p>

        <p className="text-xl font-bold mt-10">Technical Specifications</p>
        <p>
          <span className="font-bold">Height:</span> {rocket?.height?.meters}m /{" "}
          {rocket?.height?.feet} ft
        </p>
        <p>
          <span className="font-bold">Diameter:</span>{" "}
          {rocket?.diameter?.meters}m / {rocket?.diameter?.feet} ft
        </p>
        <p>
          <span className="font-bold">Mass:</span> {rocket?.mass?.kg} kg /{" "}
          {rocket?.mass?.lb} lb
        </p>
        <p>
          <span className="font-bold">No of Boosters:</span> {rocket?.boosters}
        </p>
        <p>
          <span className="font-bold">No of Boosters:</span> {rocket?.boosters}
        </p>
        <p>
          <span className="font-bold">No of Stages:</span> {rocket?.stages}
        </p>

        <p className="text-xl font-bold mt-10">Stage I Specifications:</p>

        <p>
          <span className="font-bold">Engines:</span>{" "}
          {rocket?.first_stage?.engines}
        </p>
        <p>
          <span className="font-bold">Fuel Amount Tons:</span>{" "}
          {rocket?.first_stage?.fuel_amount_tons}
        </p>
        <p>
          <span className="font-bold">Thrush Sea Level:</span>{" "}
          {rocket?.first_stage?.thrust_sea_level?.kN} kN /{" "}
          {rocket?.first_stage?.thrust_sea_level?.lbf} lbf
        </p>
        <p>
          <span className="font-bold">Thrush Vacuum:</span>{" "}
          {rocket?.first_stage?.thrust_vacuum?.kN} kN /{" "}
          {rocket?.first_stage?.thrust_vacuum?.lbf} lbf
        </p>
        <p>
          <span className="font-bold">Reusable:</span>{" "}
          {rocket?.first_stage?.reusable ? "Yes" : "No"}
        </p>
        <p className="text-xl font-bold mt-10">Stage II Specifications:</p>

        <p>
          <span className="font-bold">Engines:</span>{" "}
          {rocket?.second_stage?.engines}
        </p>
        <p>
          <span className="font-bold">Fuel Amount Tons:</span>{" "}
          {rocket?.second_stage?.fuel_amount_tons}
        </p>
        <p>
          <span className="font-bold">Thrush:</span>{" "}
          {rocket?.second_stage?.thrust?.kN} kN /{" "}
          {rocket?.second_stage?.thrust?.lbf} lbf
        </p>
        <p>
          <span className="font-bold">Reusable:</span>{" "}
          {rocket?.second_stage?.reusable ? "Yes" : "No"}
        </p>
      </div>
    </div>
  );
};

export default RocketDetailPage;
