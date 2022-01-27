import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ForecastViewComponent } from "./components/forecast-view/forecast-view.component";

const routes: Routes = [
  {
    path: ":zipcode",
    component: ForecastViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForecastRoutingModule {}
