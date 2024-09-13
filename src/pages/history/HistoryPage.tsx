import { useEffect, useState } from "react";
import RocketCard from "../../components/RocketCard";
import { fetchRockets } from "../../api/rockets";
import { fetchHistory } from "../../api/history";
import HistoryCard from "../../components/HistoryCard";

const HistoryPage = () => {
  const [history, setHistory] = useState([]);

  const fetchData = async () => {
    const {
      data: { docs },
    } = await fetchHistory();

    setHistory(docs);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center gap-12">
      <h3 className="text-3xl font-bold">History</h3>

      {history?.map((historyItem) => (
        <HistoryCard
          key={historyItem?.id}
          title={historyItem?.title}
          event_date={historyItem?.event_date_utc}
          details={historyItem?.details}
          link={historyItem?.links?.article}
        />
      ))}
    </div>
  );
};

export default HistoryPage;
