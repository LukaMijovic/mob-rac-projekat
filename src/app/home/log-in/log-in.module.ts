import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogInPageRoutingModule } from './log-in-routing.module';

import { LogInPage } from './log-in.page';
import {LogInService} from "./log-in.service";
import {Router} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogInPageRoutingModule
  ],
  declarations: [LogInPage]
})
export class LogInPageModule {

  constructor() {
  }

  // logIn(email: string, password: string) {
  //   this.logInService.logIn(email, password);
  //
  //   this.router.navigateByUrl("/home/flights");
  // }

}
