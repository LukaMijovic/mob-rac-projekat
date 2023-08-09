import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlightsPageRoutingModule } from './flights-routing.module';

import { FlightsPage } from './flights.page';
import {FlightComponent} from "./flight/flight.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlightsPageRoutingModule
  ],
    declarations: [FlightsPage, FlightComponent]
})
export class FlightsPageModule {}
