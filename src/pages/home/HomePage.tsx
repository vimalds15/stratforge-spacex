import { useEffect, useState } from "react";
import { fetchRockets } from "../../api/rockets";
import { fetchLaunches } from "../../api/launches";
import { LaunchCard, RocketCard } from "../../components";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [rockets, setRockets] = useState([]);
  const [launches, setLaunches] = useState([]);

  const fetchRocketsData = async () => {
    const {
      data: { docs },
    } = await fetchRockets();

    const rocketsData = docs.slice(0, 3);
    setRockets(rocketsData);
  };

  const fetchLaunchesData = async () => {
    const {
      data: { docs },
    } = await fetchLaunches(3, 0);

    setLaunches(docs);
  };

  useEffect(() => {
    fetchRocketsData();
    fetchLaunchesData();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold">Recent Launches</p>
        </div>
        <Link
          to="/rockets"
          className="bg-black hover:bg-zinc-700 px-4 py-2 rounded-md transition-all cursor-pointer"
        >
          <p className="font-semibold text-zinc-100">View More</p>
        </Link>
      </div>
      <div className="flex flex-wrap justify-evenly gap-12 mt-10">
        {launches?.map((launch, index) => (
          <LaunchCard
            key={launch?.id}
            id={launch?.id}
            title={launch?.name}
            date={launch?.date_utc}
            details={launch?.details}
            image={launch?.links?.patch?.large}
          />
        ))}
      </div>
      <div className="flex justify-between items-center mt-10">
        <div>
          <p className="font-semibold">Recent Rockets</p>
        </div>
        <Link
          to="/launches"
          className="bg-black hover:bg-zinc-700 px-4 py-2 rounded-md transition-all cursor-pointer"
        >
          <p className="font-semibold text-zinc-100">View More</p>
        </Link>
      </div>
      <div className="flex flex-wrap justify-evenly gap-12 mt-10">
        {rockets?.map((rocket) => (
          <RocketCard
            key={rocket?.id}
            id={rocket?.id}
            title={rocket?.name}
            description={rocket?.description}
            company={rocket?.company}
            image={rocket.flickr_images[0]}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
