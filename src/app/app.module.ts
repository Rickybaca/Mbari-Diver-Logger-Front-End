import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { LogDiverComponent } from './log-diver/log-diver.component';
import { AddDiverComponent } from './add-diver/add-diver.component';

import { HttpClientModule } from '@angular/common/http';
import { LogTrainingComponent } from './log-training/log-training.component';
import { AddEquipmentComponent } from './add-equipment/add-equipment.component';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    NavComponent,
    LogDiverComponent,
    AddDiverComponent,
    LogTrainingComponent,
    AddEquipmentComponent,
    AddInventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
