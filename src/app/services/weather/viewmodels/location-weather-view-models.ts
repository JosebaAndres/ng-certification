import { Model200 } from "../../open-weather-api/models/model200";

export interface LocationWeatherViewModel {
  zipCode: string;
  state: "loaded" | "loading" | "error";
  data?: Model200;
}
