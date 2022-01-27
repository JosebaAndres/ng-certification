import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "app-forecast-loading",
  templateUrl: "./forecast-loading.component.html",
  styleUrls: ["./forecast-loading.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastLoadingComponent {
  @Input() zipCode: string | undefined;
}
