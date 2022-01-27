import { ForecastDailyResult } from "../../open-weather-api/models/forecast-daily-result";

export interface ForecastViewModel {
  zipCode: string;
  state: "loaded" | "loading" | "error";
  data?: ForecastDailyResult;
}
