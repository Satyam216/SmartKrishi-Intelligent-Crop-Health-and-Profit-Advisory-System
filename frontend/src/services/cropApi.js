import { apiRequest } from "./api";

export const getCrops = (state, district) =>
  apiRequest(`/crop-calendar?state=${state}&district=${district}`);