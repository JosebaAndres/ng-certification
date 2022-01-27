import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./modules/locations/locations.module").then(
        (m) => m.LocationsModule
      ),
  },
  {
    path: "forecast",
    loadChildren: () =>
      import("./modules/forecast/forecast.module").then(
        (m) => m.ForecastModule
      ),
  },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
