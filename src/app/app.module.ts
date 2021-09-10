import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesListComponent } from './components/tutorials-list/countries-list.component';
import {SearchPipe} from "./search.pipe";

@NgModule({
  declarations: [
    AppComponent,
    CountriesListComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    SearchPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
