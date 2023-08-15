import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import {BoughtTicketComponent} from "./bought-ticket/bought-ticket.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule
  ],
    declarations: [ProfilePage, BoughtTicketComponent],
  exports: [BoughtTicketComponent]
})
export class ProfilePageModule {}
