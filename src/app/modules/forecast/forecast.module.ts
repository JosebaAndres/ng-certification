import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ForecastViewComponent } from "./components/forecast-view/forecast-view.component";
import { ForecastRoutingModule } from "./forecast-routing.module";
import { ForecastErrorComponent } from "./components/forecast-error/forecast-error.component";
import { ForecastLoadingComponent } from "./components/forecast-loading/forecast-loading.component";
import { ForecastListComponent } from "./components/forecast-list/forecast-list.component";

@NgModule({
  declarations: [
    ForecastViewComponent,
    ForecastErrorComponent,
    ForecastListComponent,
    ForecastLoadingComponent,
  ],
  imports: [CommonModule, ForecastRoutingModule],
  exports: [],
})
export class ForecastModule {}
