import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import {LogInGuard} from "./log-in/log-in.guard";

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'log-in',
    loadChildren: () => import('./log-in/log-in.module').then( m => m.LogInPageModule)
  },
  {
    path: 'flights',
    loadChildren: () => import('./flights/flights.module').then( m => m.FlightsPageModule),
    canLoad: [LogInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
