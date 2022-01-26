import { Clouds } from "./clouds";
import { Coord } from "./coord";
import { Main } from "./main";
import { Rain } from "./rain";
import { Snow } from "./snow";
import { Sys } from "./sys";
import { Weather } from "./weather";
import { Wind } from "./wind";

export interface Model200 {
  coord?: Coord;
  /**
   * (more info Weather condition codes)
   */
  weather?: Array<Weather>;
  /**
   * Internal parameter
   */
  base?: string;
  main?: Main;
  /**
   * Visibility, meter
   */
  visibility?: number;
  wind?: Wind;
  clouds?: Clouds;
  rain?: Rain;
  snow?: Snow;
  /**
   * Time of data calculation, unix, UTC
   */
  dt?: number;
  sys?: Sys;
  /**
   * City ID
   */
  id?: number;
  name?: string;
  /**
   * Internal parameter
   */
  cod?: number;
}
