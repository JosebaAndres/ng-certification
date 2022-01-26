import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-location-view",
  templateUrl: "./location-view.component.html",
  styleUrls: ["./location-view.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationViewComponent {
  constructor() {}
}
