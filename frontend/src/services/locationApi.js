import { apiRequest } from "./api";

export const getStates = () =>
  apiRequest("/location/states");

export const getDistricts = (state) =>
  apiRequest(`/location/districts/${state}`);