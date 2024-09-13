import { useEffect, useState } from "react";
import RocketCard from "../../components/RocketCard";
import { fetchRockets } from "../../api/rockets";

const RocketsPage = () => {
  const [rockets, setRockets] = useState([]);

  const fetchData = async () => {
    const {
      data: { docs },
    } = await fetchRockets();

    setRockets(docs);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h3 className="text-3xl font-bold text-center mb-10">Rockets</h3>
      <div className="flex flex-wrap justify-evenly gap-12">
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

export default RocketsPage;
