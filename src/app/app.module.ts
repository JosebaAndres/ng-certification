import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { ErrorsModule } from "./modules/errors/errors.module";

@NgModule({
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, ErrorsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
