import { City } from "./city";
import { ForecastDaily } from "./forecast-daily";

export interface ForecastDailyResult {
  city?: City;
  cod?: string;
  message?: number;
  cnt: number;
  list?: Array<ForecastDaily>;
}
