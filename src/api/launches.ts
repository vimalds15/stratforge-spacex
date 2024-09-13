import { api } from "./api";

export const fetchLaunches = async (limit:number,offset: number) => {
  return await api.post("/launches/query", {
    options: {
      limit: limit,
      offset: offset,
      sort: {
        date_utc: "desc",
      },
    },
    query: {
      name: { $ne: null },
      date_utc: { $ne: null },
      details: { $ne: null },
      "links.patch.large": { $ne: null },
    },
  });
};

export const fetchLaunchById = (id: string) => api.get(`/launches/${id}`);
