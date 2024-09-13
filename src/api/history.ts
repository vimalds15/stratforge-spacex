import { api } from "./api";

export const fetchHistory = () =>
  api.post("/history/query", {
    options: {
      limit: 20,
      offset: 0,
    },
  });
