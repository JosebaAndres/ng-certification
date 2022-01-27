import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-forecast-view",
  templateUrl: "./forecast-view.component.html",
  styleUrls: ["./forecast-view.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastViewComponent {
  constructor(route: ActivatedRoute) {
    const zipcode: string = route.snapshot.params.zipcode;
    alert(zipcode);
  }
}
