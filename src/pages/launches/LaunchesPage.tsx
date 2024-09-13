import { useEffect, useState } from "react";
import { LaunchCard } from "../../components";
import { fetchLaunches } from "../../api/launches";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";

const LaunchesPage = () => {
  const [launches, setLaunches] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(true);

  const fetchData = async (limit:number,offset: number) => {
    const {
      data: { docs, hasNextPage: hasNextPageApi },
    } = await fetchLaunches(limit,offset);

    setHasNextPage(hasNextPageApi);
    setLaunches((prev) => [...prev, ...docs]);
  };

  console.log(launches.length);

  const { lastElementRef, loading } = useInfiniteScroll(fetchData, hasNextPage);

  return (
    <div>
      <h3 className="text-3xl font-bold text-center mb-10">
        Most Recent Launches
      </h3>
      <div className="flex flex-wrap justify-evenly gap-12">
        {launches?.map((launch, index) => (
          <LaunchCard
            key={launch?.id}
            id={launch?.id}
            title={launch?.name}
            date={launch?.date_utc}
            details={launch?.details}
            image={launch?.links?.patch?.large}
            ref={launches.length === index + 1 ? lastElementRef : null}
          />
        ))}
      </div>
      {loading && <p className="text-center">Loading...</p>}
    </div>
  );
};

export default LaunchesPage;
