import { Temp } from "./temp";
import { Weather } from "./weather";

export interface ForecastDaily {
  dt?: number;
  sunrise?: number;
  sunset?: number;
  temp?: Temp;
  feels_like: {
    day: 260.95;
    night: 258.5;
    eve: 262.38;
    morn: 254.13;
  };
  pressure?: number;
  humidity?: number;
  weather?: Array<Weather>;
  speed?: number;
  deg?: number;
  gust?: number;
  clouds?: number;
  pop?: number;
  snow?: number;
}
