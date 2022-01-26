import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { WeatherService } from "../../../../services/weather.service/weather.service";

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
}
