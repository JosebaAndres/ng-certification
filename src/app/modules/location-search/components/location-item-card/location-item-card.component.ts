import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from "@angular/core";
import { WeatherIconsService } from "../../../../services/weather-icons/weather-icons.service";
import { LocationWeatherViewModel } from "../../../../services/weather/viewmodels/location-weather-view-models";

@Component({
  selector: "app-location-item-card",
  templateUrl: "./location-item-card.component.html",
  styleUrls: ["./location-item-card.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationItemCardComponent implements OnChanges {
  @Input() locationWeather!: LocationWeatherViewModel;
  @Output() remove = new EventEmitter<void>();

  weatherDescription: string | undefined;
  weatherIcon: false | string = false;

  constructor(private weatherIconsService: WeatherIconsService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.locationWeather) {
      this.refreshWeather();
    }
  }

  emitRemove() {
    this.remove.emit();
  }

  private refreshWeather() {
    if (
      this.locationWeather.data?.weather &&
      this.locationWeather.data?.weather.length > 0
    ) {
      this.weatherDescription =
        this.locationWeather.data?.weather[0].description;
      this.weatherIcon = this.weatherIconsService.tryResolveIconUrl(
        this.locationWeather.data?.weather[0].main
      );
    } else {
      this.weatherDescription = undefined;
      this.weatherIcon = false;
    }
  }
}
