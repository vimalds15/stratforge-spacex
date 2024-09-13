import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchLaunchById } from "../../../api/launches";
import { convertToLocalDate } from "../../../utils";
import { fetchRocketById } from "../../../api/rockets";

const LaunchDetailPage: React.FC = () => {
  const [launch, setLaunch] = useState({});
  const [rocket, setRocket] = useState({});
  const { id } = useParams();

  const fetchLaunchData = async (id) => {
    const { data } = await fetchLaunchById(id);
    const { data: rocketData } = await fetchRocketById(data?.rocket);
    setRocket(rocketData);
    setLaunch(data);
  };

  useEffect(() => {
    fetchLaunchData(id);
  }, [id]);

  return (
    <div>
      <img
        src={launch?.links?.patch?.large}
        className="w-full h-[350px] object-contain mb-10"
        alt="logo"
      />

      <div className="flex flex-col gap-4 p-4 ">
        <p className="text-2xl font-bold text-center mb-4">{launch?.name}</p>
        <p className="text-lg">
          <span className="font-bold">Launch Date:</span>{" "}
          {convertToLocalDate(launch?.date_utc)} USD
        </p>
        <p className="text-lg">
          <span className="font-bold">Description:</span> {launch?.details}
        </p>
        {launch?.links?.flickr?.original.length > 0 && (
          <p className="text-lg mb-2">
            <p className="font-bold">Related Images:</p>
            <div className="flex flex-wrap justify-evenly w-full gap-8 mt-8">
              {launch?.links?.flickr?.original?.map((image) => (
                <img src={image} className="w-96 h-[220px]" />
              ))}
            </div>
          </p>
        )}

        <p className="text-lg">
          <span className="font-bold">Flight Number:</span>{" "}
          {launch?.flight_number}
        </p>

        <p className="text-xl font-bold mt-10">Technical Specifications</p>
        <p>
          <span className="font-bold">Rocket:</span> {rocket?.name}
        </p>
        <p>
          <span className="font-bold">Success:</span>{" "}
          {launch?.success ? "Yes" : "No"}
        </p>
      </div>
    </div>
  );
};

export default LaunchDetailPage;
