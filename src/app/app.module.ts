import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgxPaginationModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
