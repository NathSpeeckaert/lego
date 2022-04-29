import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetRoutingModule } from './set/set-routing.module';
import { NavComponent } from './nav/nav.component';
import { NgSelect2Module } from 'ng-select2';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SetRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgSelect2Module
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
