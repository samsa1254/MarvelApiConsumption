import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { AllCharactersComponent } from './all-characters/all-characters.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MarvelApiService } from './Service/marvel-api.service';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    AllCharactersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
