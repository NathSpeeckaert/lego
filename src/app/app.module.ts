import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetRoutingModule } from './set/set-routing.module';
import { NavComponent } from './nav/nav.component';
import { NgSelect2Module } from 'ng-select2';
import { HomeComponent } from './home/home.component';
import { NgChartsModule } from 'ng2-charts';
import { CountChartComponent } from './count-chart/count-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CountChartComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SetRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgSelect2Module,
    NgChartsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
