import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservationPageRoutingModule } from './reservation-routing.module';

import { ReservationPage } from './reservation.page';
import {TabBarComponent} from "../tab-bar/tab-bar.component";
import {HomePageModule} from "../home.module";
import {ReservationComponent} from "./reservation/reservation.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservationPageRoutingModule,
    HomePageModule
  ],
    declarations: [ReservationPage, ReservationComponent],
  exports: [TabBarComponent]
})
export class ReservationPageModule {}
