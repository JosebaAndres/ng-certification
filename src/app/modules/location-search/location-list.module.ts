import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LocationSearchComponent } from "./components/location-search/location-search.component";
import { LocationViewComponent } from "./components/location-view/location-view.component";
import { LocationItemComponent } from "./components/location-item/location-item.component";
import { LocationListComponent } from "./components/location-list/location-list.component";
import { LocationListRoutingModule } from "./location-list-routing.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    LocationSearchComponent,
    LocationViewComponent,
    LocationListComponent,
    LocationItemComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, LocationListRoutingModule],
  exports: [],
})
export class LocationListModule {}
