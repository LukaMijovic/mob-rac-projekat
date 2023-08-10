import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlightsPage } from './flights.page';

const routes: Routes = [
  {
    path: '',
    component: FlightsPage
  },
  {
    path: ':id',
    loadChildren: () => import('./flight-details/flight-details.module').then( m => m.FlightDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlightsPageRoutingModule {}
