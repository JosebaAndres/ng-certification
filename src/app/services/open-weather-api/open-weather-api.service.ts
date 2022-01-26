import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { Model200 } from "./models/model200";
import { HandledError } from "./models/handled-error";

const OPEN_WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
const OPEN_WEATHER_API_APP_ID = "5a4b2d457ecbef9eb2a71e480b947604";

@Injectable({
  providedIn: "root",
})
export class OpenWeatherApiService {
  constructor(private httpClient: HttpClient) {}

  getCurrentWeatherDataByZipCode(zipCode: string) {
    let httpParams = new HttpParams();
    httpParams = httpParams.set("zip", zipCode);
    return this.get("weather", httpParams);
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

  private get(urlPath: string, httpParams: HttpParams): Observable<Model200> {
    const resolvedHttpParams = httpParams.set("appid", OPEN_WEATHER_API_APP_ID);
    return this.httpClient
      .get<Model200>(`${OPEN_WEATHER_API_URL}/${urlPath}`, {
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
