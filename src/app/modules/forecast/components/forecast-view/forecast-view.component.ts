import { ChangeDetectionStrategy, Component, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ForecastViewModel } from "../../../../services/forecast/viewmodels/forecast-view-models";
import { filter, map, ReplaySubject, takeUntil } from "rxjs";
import { ForecastService } from "../../../../services/forecast/forecast.service";

@Component({
  selector: "app-forecast-view",
  templateUrl: "./forecast-view.component.html",
  styleUrls: ["./forecast-view.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastViewComponent implements OnDestroy {
  private destroy$ = new ReplaySubject<void>();

  isLoading$ = this.forecastService.selectedForecast$.pipe(
    map((selectedForecast) => selectedForecast?.state === "loading")
  );

  isLoaded$ = this.forecastService.selectedForecast$.pipe(
    map((selectedForecast) => selectedForecast?.state === "loaded")
  );

  isError$ = this.forecastService.selectedForecast$.pipe(
    map((selectedForecast) => selectedForecast?.state === "error")
  );

  selectedForecast$ = this.forecastService.selectedForecast$;

  constructor(
    route: ActivatedRoute,
    private forecastService: ForecastService,
    private router: Router
  ) {
    const zipcode: string = route.snapshot.params.zipcode;
    this.forecastService.setSelectedForecast(zipcode);
    this.forecastService.selectedForecast$
      .pipe(
        takeUntil(this.destroy$),
        filter((selectedForecast) => selectedForecast === null)
      )
      .subscribe(() => {
        this.router.navigate([""]);
      });
  }

  reload() {
    this.forecastService.reload();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
