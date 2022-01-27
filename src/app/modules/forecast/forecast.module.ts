import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ForecastViewComponent } from "./components/forecast-view/forecast-view.component";
import { ForecastRoutingModule } from "./forecast-routing.module";

@NgModule({
  declarations: [ForecastViewComponent],
  imports: [CommonModule, ForecastRoutingModule],
  exports: [],
})
export class ForecastModule {}
