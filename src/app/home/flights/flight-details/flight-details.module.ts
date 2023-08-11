import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlightDetailsPageRoutingModule } from './flight-details-routing.module';

import { FlightDetailsPage } from './flight-details.page';
import {FlightsPageRoutingModule} from "../flights-routing.module";
import {FlightsPageModule} from "../flights.module";
import {PriceListModalComponent} from "./price-list-modal/price-list-modal.component";
import {TabBarComponent} from "../../tab-bar/tab-bar.component";
import {HomePageModule} from "../../home.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlightDetailsPageRoutingModule,
    FlightsPageModule,
    HomePageModule,
  ],
  declarations: [FlightDetailsPage, PriceListModalComponent],
  entryComponents: [PriceListModalComponent],
})
export class FlightDetailsPageModule {}
