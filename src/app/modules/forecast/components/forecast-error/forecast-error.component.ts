import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-forecast-error",
  templateUrl: "./forecast-error.component.html",
  styleUrls: ["./forecast-error.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastErrorComponent {}
