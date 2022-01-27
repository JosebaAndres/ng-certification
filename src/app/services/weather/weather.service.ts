import { Injectable, OnDestroy } from "@angular/core";
import { LocationWeatherViewModel } from "./viewmodels/location-weather-view-models";
import { BehaviorSubject, map, ReplaySubject, takeUntil } from "rxjs";
import { OpenWeatherApiService } from "../open-weather-api/open-weather-api.service";
import { WeatherResult } from "../open-weather-api/models/weather-result";
import { ErrorService } from "../error/error.service";
import { isArrayString } from "../../utils/is-array-string";

const LOCAL_STORAGE_KEY = "zipCodes";

@Injectable({
  providedIn: "root",
})
export class WeatherService implements OnDestroy {
  private destroy$ = new ReplaySubject<void>();
  private locationsWeather = new BehaviorSubject<
    Array<LocationWeatherViewModel>
  >([]);

  locationsWeather$ = this.locationsWeather.asObservable();

  constructor(
    private openWeatherApiService: OpenWeatherApiService,
    private errorService: ErrorService
  ) {
    this.tryLoadLocalStorage();
    this.attachToRefreshLocalStorage();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  addZipCode(value: string) {
    const locationWeather = this.locationsWeather.value.find(
      (locationWeather) => locationWeather.zipCode === value
    );
    if (!locationWeather) {
      const newValue = [...this.locationsWeather.value];
      newValue.push({ zipCode: value, state: "loading" });
      this.locationsWeather.next(newValue);
      this.loadZipCode(value);
    }
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

  reloadZipCode(value: string) {
    this.UpdateZipCode(value, { state: "loading", data: undefined });
    this.loadZipCode(value);
  }

  private loadZipCode(value: string) {
    this.openWeatherApiService.getCurrentWeatherDataByZipCode(value).subscribe({
      next: (result) => {
        this.zipCodeLoaded(value, result);
      },
      error: (error) => {
        if (this.openWeatherApiService.isHandledError(error)) {
          this.removeZipCode(value);
          this.errorService.addError(`${value}: ${error.message}`);
        } else {
          this.zipCodeError(value);
        }
      },
    });
  }

  private zipCodeLoaded(zipCode: string, value: WeatherResult) {
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

  private attachToRefreshLocalStorage() {
    this.locationsWeather$
      .pipe(
        takeUntil(this.destroy$),
        map((locationsWeather) => {
          return locationsWeather.map((locationWeather) => {
            return locationWeather.zipCode;
          });
        })
      )
      .subscribe((value) => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(value));
      });
  }

  private tryLoadLocalStorage() {
    const localStorageStringData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (localStorageStringData) {
      const localStorageData = this.tryParseLocalStorageStringData(
        localStorageStringData
      );
      localStorageData.forEach((localStorageDataItem) => {
        this.addZipCode(localStorageDataItem);
      });
    }
  }

  private tryParseLocalStorageStringData(
    localStorageStringData: string
  ): Array<string> {
    try {
      const localStorageData = JSON.parse(localStorageStringData);
      if (isArrayString(localStorageData)) {
        return localStorageData;
      } else {
        return [];
      }
    } catch (error) {
      return [];
    }
  }
}
