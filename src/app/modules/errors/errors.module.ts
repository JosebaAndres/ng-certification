import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ErrorsComponent } from "./components/errors/errors.component";
import { ErrorComponent } from "./components/error/error.component";

@NgModule({
  declarations: [ErrorsComponent, ErrorComponent],
  imports: [CommonModule],
  exports: [ErrorsComponent],
})
export class ErrorsModule {}
