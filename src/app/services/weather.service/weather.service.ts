import { Injectable } from "@angular/core";
import { LocationWeatherViewModel } from "./viewmodels/location-weather-view-models";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class WeatherService {
  private locationsWeather = new BehaviorSubject<
    Array<LocationWeatherViewModel>
  >([]);

  locationsWeather$ = this.locationsWeather.asObservable();

  searchZipCode(value: string) {
    const newValue = [...this.locationsWeather.value];
    newValue.push({ zipCode: value, state: "loading" });
    this.locationsWeather.next(newValue);
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
}
