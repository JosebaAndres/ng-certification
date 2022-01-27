import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-locations-view",
  templateUrl: "./locations-view.component.html",
  styleUrls: ["./locations-view.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationsViewComponent {
  constructor() {}
}
