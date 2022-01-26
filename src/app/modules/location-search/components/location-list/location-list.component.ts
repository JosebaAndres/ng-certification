import { ChangeDetectionStrategy, Component } from "@angular/core";
import { LocationWeatherViewModel } from "../../../../services/weather/viewmodels/location-weather-view-models";
import { WeatherService } from "../../../../services/weather/weather.service";

@Component({
  selector: "app-location-list",
  templateUrl: "./location-list.component.html",
  styleUrls: ["./location-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationListComponent {
  locationsWeather$ = this.weatherService.locationsWeather$;

  constructor(private weatherService: WeatherService) {}

  removeZipCode(value: string) {
    this.weatherService.removeZipCode(value);
  }

  reloadZipCode(value: string) {
    this.weatherService.reloadZipCode(value);
  }

  identify(index: number, item: LocationWeatherViewModel) {
    return item.zipCode;
  }
}
