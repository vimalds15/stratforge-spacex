import { api } from "./api";

export const fetchRockets = () =>
  api.post("/rockets/query", {
    options: {
      limit: 20,
      offset: 0,
    },
  });

export const fetchRocketById = (id: string) => api.get(`/rockets/${id}`);


