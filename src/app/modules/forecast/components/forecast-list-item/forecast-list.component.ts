import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { WeatherIconsService } from "../../../../services/weather-icons/weather-icons.service";
import { ForecastDaily } from "../../../../services/open-weather-api/models/forecast-daily";

@Component({
  selector: "app-forecast-list-item",
  templateUrl: "./forecast-list-item.component.html",
  styleUrls: ["./forecast-list-item.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastListItemComponent implements OnChanges {
  @Input() forecastDaily: ForecastDaily | undefined;

  weatherMain: string | undefined;
  weatherIcon: false | string = false;

  constructor(private weatherIconsService: WeatherIconsService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.forecastDaily) {
      this.refreshWeather();
    }
  }

  private refreshWeather() {
    if (this.forecastDaily?.weather && this.forecastDaily?.weather.length > 0) {
      this.weatherMain = this.forecastDaily?.weather[0].main;
      this.weatherIcon = this.weatherIconsService.tryResolveIconUrl(
        this.forecastDaily?.weather[0].main
      );
    } else {
      this.weatherMain = undefined;
      this.weatherIcon = false;
    }
  }
}
