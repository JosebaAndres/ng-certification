import { Component, OnInit } from "@angular/core";
import { WeatherService } from "../../../../services/weather.service";

@Component({
  selector: "app-location-list",
  templateUrl: "./location-list.component.html",
  styleUrls: ["./location-list.component.css"],
})
export class LocationListComponent {
  locationsWeather$ = this.weatherService.locationsWeather$;

  constructor(private weatherService: WeatherService) {}
}
