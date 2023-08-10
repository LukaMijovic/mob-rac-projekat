import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlightDetailsPageRoutingModule } from './flight-details-routing.module';

import { FlightDetailsPage } from './flight-details.page';
import {FlightsPageRoutingModule} from "../flights-routing.module";
import {FlightsPageModule} from "../flights.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlightDetailsPageRoutingModule,
    FlightsPageModule,
  ],
  declarations: [FlightDetailsPage]
})
export class FlightDetailsPageModule {}
