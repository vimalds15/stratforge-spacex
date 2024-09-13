import { api } from "./api";

export const fetchShipsById = (id: string) => api.get(`/ships/${id}`);


