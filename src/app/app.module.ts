import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import {AppRoutingModule} from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { HTTP_INTERCEPTORS } from "@angular/common/http";

@NgModule({
  declarations:[
    AppComponent,
    HomeComponent,
  ],
  imports:[
    BrowserModule,
    AppRoutingModule,

  ],
  providers:[
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {appearence: 'outline'},
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
