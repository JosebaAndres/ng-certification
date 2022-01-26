export interface LocationWeatherViewModel {
  zipCode: string;
  state: "loaded" | "loading" | "error";
}
