import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { ForecastDaily } from "../../../../services/open-weather-api/models/forecast-daily";

@Component({
  selector: "app-forecast-list-item",
  templateUrl: "./forecast-list-item.component.html",
  styleUrls: ["./forecast-list-item.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastListItemComponent {
  @Input() forecastDaily: ForecastDaily | undefined;
}
