import { Component, OnInit } from '@angular/core';
import {ReservationService} from "./reservation.service";
import {ReservationDTO} from "../../domain/dto/reservationDTO";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage implements OnInit {
  isLoading: boolean = false;

  constructor(public reservationService: ReservationService) { }

  ngOnInit() {
    this.isLoading = true;

    this.reservationService.getAllReservations().subscribe( reservationData => {
      reservationData.map(reservation => {
        reservation.departuresScheduled = new Date(reservation.departuresScheduled);
        reservation.arrivalScheduled = new Date(reservation.arrivalScheduled);
      });

      this.reservationService.reservations = reservationData;
      this.isLoading = false;
    });

  }

}
