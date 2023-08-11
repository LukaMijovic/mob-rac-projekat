import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlightsPageRoutingModule } from './flights-routing.module';

import { FlightsPage } from './flights.page';
import {FlightComponent} from "./flight/flight.component";
import {Flight} from "../../domain/flight";
import {TabBarComponent} from "../tab-bar/tab-bar.component";
import {HomePageModule} from "../home.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlightsPageRoutingModule,
    HomePageModule
  ],
  exports: [
    FlightComponent,
  ],
    declarations: [FlightsPage, FlightComponent]
})
export class FlightsPageModule {}
