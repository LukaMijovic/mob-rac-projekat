import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import {TabBarComponent} from "./tab-bar/tab-bar.component";
import {OKTA_CONFIG} from "@okta/okta-angular";
import {HTTP_INTERCEPTORS} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, TabBarComponent],
  // providers: [
  //   {
  //     provide: OKTA_CONFIG,
  //     useValue: {
  //       oktaAuth
  //     }
  //   },
  //   {
  //     provide: HTTP_INTERCEPTORS, useClass: AuthService,
  //     multi = true;
  //   }
  // ]
  exports: [TabBarComponent]
})
export class HomePageModule {}
