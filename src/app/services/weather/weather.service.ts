import { Injectable } from "@angular/core";
import { LocationWeatherViewModel } from "./viewmodels/location-weather-view-models";
import { BehaviorSubject } from "rxjs";
import { OpenWeatherApiService } from "../open-weather-api/open-weather-api.service";
import { Model200 } from "../open-weather-api/models/model200";
import { ErrorService } from "../error/error.service";

@Injectable({
  providedIn: "root",
})
export class WeatherService {
  private locationsWeather = new BehaviorSubject<
    Array<LocationWeatherViewModel>
  >([]);

  locationsWeather$ = this.locationsWeather.asObservable();

  constructor(
    private openWeatherApiService: OpenWeatherApiService,
    private errorService: ErrorService
  ) {}

  addZipCode(value: string) {
    const newValue = [...this.locationsWeather.value];
    newValue.push({ zipCode: value, state: "loading" });
    this.locationsWeather.next(newValue);
    this.openWeatherApiService.getCurrentWeatherDataByZipCode(value).subscribe({
      next: (result) => {
        this.zipCodeLoaded(value, result);
      },
      error: (error) => {
        if (this.openWeatherApiService.isCityNotFoundError(error)) {
          this.removeZipCode(value);
          this.errorService.addError(`${value}: ${error.message}`);
        } else {
          this.zipCodeError(value);
        }
      },
    });
  }

  removeZipCode(value: string) {
    const newValue = [...this.locationsWeather.value];
    const locationWeather = newValue.find(
      (locationWeather) => locationWeather.zipCode === value
    );
    if (locationWeather) {
      const locationWeatherIndex = newValue.indexOf(locationWeather);
      newValue.splice(locationWeatherIndex, 1);
      this.locationsWeather.next(newValue);
    }
  }

  private zipCodeLoaded(zipCode: string, value: Model200) {
    this.UpdateZipCode(zipCode, { state: "loaded", data: value });
  }

  private zipCodeError(zipCode: string) {
    this.UpdateZipCode(zipCode, { state: "error" });
  }

  private UpdateZipCode(
    zipCode: string,
    value: Partial<LocationWeatherViewModel>
  ) {
    const newValue = [...this.locationsWeather.value];
    const locationWeather = newValue.find(
      (locationWeather) => locationWeather.zipCode === zipCode
    );
    if (locationWeather) {
      const locationWeatherIndex = newValue.indexOf(locationWeather);
      newValue[locationWeatherIndex] = {
        ...newValue[locationWeatherIndex],
        ...value,
      };
      this.locationsWeather.next(newValue);
    }
  }
}
