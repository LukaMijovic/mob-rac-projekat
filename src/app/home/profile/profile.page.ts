import { Component, OnInit } from '@angular/core';
import {LogInService} from "../log-in/log-in.service";
import {ReservationService} from "../reservation/reservation.service";
import {ReservationDTO} from "../../domain/dto/reservationDTO";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public username: string | null;
  public isLoading: boolean = false;
  public boughtTickets: ReservationDTO[] = [];

  constructor(private reservationService: ReservationService, private logInService: LogInService) {
    this.username = localStorage.getItem("username");
  }

  ngOnInit() {
    this.isLoading = true;

    this.reservationService.getAllBoughtTickets(Number(localStorage.getItem("userId"))).subscribe(
      reservationData => {
        reservationData.map(reservation => {
          reservation.departuresScheduled = new Date(reservation.departuresScheduled);
          reservation.arrivalScheduled = new Date(reservation.arrivalScheduled);
        });

        this.boughtTickets = reservationData;
        this.isLoading = false;
      }
    );
  }


  logOut() {
    this.logInService.logOut();
  }
}
