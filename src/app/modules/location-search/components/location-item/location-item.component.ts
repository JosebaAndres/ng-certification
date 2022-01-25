import { Component, Input } from "@angular/core";
import { LocationWeatherModel } from "../../../../models/location-weather-model";

@Component({
  selector: "app-location-item",
  templateUrl: "./location-item.component.html",
  styleUrls: ["./location-item.component.css"],
})
export class LocationItemComponent {
  @Input() locationWeather: LocationWeatherModel;

  constructor() {}
}
