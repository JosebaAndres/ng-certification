import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { WeatherResult } from "./models/weather-result";
import { HandledError } from "./models/handled-error";
import { ForecastDailyResult } from "./models/forecast-daily-result";

const OPEN_WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
const OPEN_WEATHER_API_APP_ID = "5a4b2d457ecbef9eb2a71e480b947604";

@Injectable({
  providedIn: "root",
})
export class OpenWeatherApiService {
  constructor(private httpClient: HttpClient) {}

  getCurrentWeatherDataByZipCode(zipCode: string): Observable<WeatherResult> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set("zip", zipCode);
    return this.get<WeatherResult>("weather", httpParams);
  }

  getFivedayForecastByZipCode(
    zipCode: string
  ): Observable<ForecastDailyResult> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set("cnt", 5);
    httpParams = httpParams.set("zip", zipCode);
    return this.get<ForecastDailyResult>("forecast/daily", httpParams);
  }

  isHandledError(error: any): error is HandledError {
    if (
      (error?.cod === "404" || error?.cod === "400") &&
      typeof error?.message === "string"
    ) {
      return true;
    } else {
      return false;
    }
  }

  private get<T>(urlPath: string, httpParams: HttpParams): Observable<T> {
    const resolvedHttpParams = httpParams.set("appid", OPEN_WEATHER_API_APP_ID);
    return this.httpClient
      .get<T>(`${OPEN_WEATHER_API_URL}/${urlPath}`, {
        params: resolvedHttpParams,
      })
      .pipe(
        catchError((error) => {
          if (error?.error) {
            return throwError(() => error.error);
          } else {
            return throwError(() => error);
          }
        })
      );
  }
}
