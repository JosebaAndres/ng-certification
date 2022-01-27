import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LocationsViewComponent } from "./components/locations-view/locations-view.component";

const routes: Routes = [
  {
    path: "",
    component: LocationsViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationsRoutingModule {}
