import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from "@angular/core";
import { LocationWeatherViewModel } from "../../../../services/weather/viewmodels/location-weather-view-models";

@Component({
  selector: "app-location-item",
  templateUrl: "./location-item.component.html",
  styleUrls: ["./location-item.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationItemComponent implements OnChanges {
  isLoading = false;
  isLoaded = false;
  isError = false;

  @Input()
  locationWeather!: LocationWeatherViewModel;
  @Output() remove = new EventEmitter<string>();
  @Output() reload = new EventEmitter<string>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.locationWeather) {
      this.refreshStatus();
    }
  }

  emitRemove(value: string) {
    this.remove.emit(value);
  }

  emitReload(value: string) {
    this.reload.emit(value);
  }

  private refreshStatus() {
    switch (this.locationWeather?.state) {
      case "loading":
        this.isLoading = true;
        this.isLoaded = false;
        this.isError = false;
        break;
      case "loaded":
        this.isLoading = false;
        this.isLoaded = true;
        this.isError = false;
        break;
      case "error":
        this.isLoading = false;
        this.isLoaded = false;
        this.isError = true;
        break;
      default:
        this.isLoading = false;
        this.isLoaded = false;
        this.isError = false;
        break;
    }
  }
}
