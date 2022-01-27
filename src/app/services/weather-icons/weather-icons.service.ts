import { Injectable } from "@angular/core";
import { WeatherIconModel } from "./models/weather-icon-model";

const WEATHER_ICONS_URL = "https://www.angulartraining.com/images/weather/";

@Injectable({
  providedIn: "root",
})
export class WeatherIconsService {
  tryResolveIconUrl(value: string | undefined): string | false {
    if (value && value in WeatherIconModel) {
      return `${WEATHER_ICONS_URL}/${value.toLowerCase()}.png`;
    } else {
      return false;
    }
  }
}
