import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { WeatherService } from "../../../../services/weather/weather.service";

@Component({
  selector: "app-location-search",
  templateUrl: "./location-search.component.html",
  styleUrls: ["./location-search.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationSearchComponent {
  locationForm = new FormGroup({
    zipcode: new FormControl("", Validators.required),
  });

  constructor(private weatherService: WeatherService) {}

  onSubmit() {
    this.weatherService.addZipCode(this.locationForm.controls.zipcode.value);
    this.locationForm.reset();
  }
}
