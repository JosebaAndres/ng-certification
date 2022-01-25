import { Injectable } from "@angular/core";
import { LocationWeatherModel } from "../models/location-weather-model";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class WeatherService {
  private locationsWeather = new BehaviorSubject<Array<LocationWeatherModel>>(
    []
  );

  locationsWeather$ = this.locationsWeather.asObservable();

  searchZipCode(value: string) {
    const newValue = [...this.locationsWeather.value];
    newValue.push({ zipCode: value, loading: true });
    this.locationsWeather.next(newValue);
  }
}
