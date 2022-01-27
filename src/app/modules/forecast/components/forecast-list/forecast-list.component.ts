import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { ForecastDailyResult } from "../../../../services/open-weather-api/models/forecast-daily-result";

@Component({
  selector: "app-forecast-list",
  templateUrl: "./forecast-list.component.html",
  styleUrls: ["./forecast-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastListComponent {
  @Input() selectedForecast: ForecastDailyResult | undefined;
}
