import { WeatherResult } from "../../open-weather-api/models/weather-result";

export interface LocationWeatherViewModel {
  zipCode: string;
  state: "loaded" | "loading" | "error";
  data?: WeatherResult;
}
