import { Injectable } from "@angular/core";
import { ForecastViewModel } from "./viewmodels/forecast-view-models";
import { BehaviorSubject } from "rxjs";
import { OpenWeatherApiService } from "../open-weather-api/open-weather-api.service";
import { ForecastDailyResult } from "../open-weather-api/models/forecast-daily-result";
import { ErrorService } from "../error/error.service";

@Injectable({
  providedIn: "root",
})
export class ForecastService {
  private selectedForecast = new BehaviorSubject<ForecastViewModel | null>(
    null
  );

  selectedForecast$ = this.selectedForecast.asObservable();

  constructor(
    private openWeatherApiService: OpenWeatherApiService,
    private errorService: ErrorService
  ) {}

  setSelectedForecast(value: string) {
    this.selectedForecast.next({ zipCode: value, state: "loading" });
    this.loadZipCode(value);
  }

  reload() {
    if (this.selectedForecast.value) {
      this.setSelectedForecast(this.selectedForecast.value.zipCode);
    }
  }

  private loadZipCode(zipCode: string) {
    this.openWeatherApiService.getFivedayForecastByZipCode(zipCode).subscribe({
      next: (result) => {
        this.zipCodeLoaded(zipCode, result);
      },
      error: (error) => {
        if (this.selectedForecast.value?.zipCode === zipCode) {
          if (this.openWeatherApiService.isHandledError(error)) {
            this.selectedForecast.next(null);
            this.errorService.addError(`${zipCode}: ${error.message}`);
          } else {
            this.selectedForecast.next({
              zipCode: zipCode,
              state: "error",
            });
          }
        }
      },
    });
  }

  private zipCodeLoaded(zipCode: string, result: ForecastDailyResult) {
    if (this.selectedForecast.value?.zipCode === zipCode) {
      this.selectedForecast.next({
        zipCode: zipCode,
        state: "loaded",
        data: result,
      });
    }
  }
}
