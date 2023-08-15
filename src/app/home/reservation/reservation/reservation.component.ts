import {Component, Input, OnInit} from '@angular/core';
import {ReservationDTO} from "../../../domain/dto/reservationDTO";
import {ReservationService} from "../reservation.service";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-reservation-component',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationComponent  implements OnInit {

  @Input() reservation: ReservationDTO = {
    id: -1,
    flightDate: new Date(),
    departuresScheduled: new Date(),
    arrivalScheduled: new Date(),
    airlineName: "TEST",
    iataCodeDep: "TST1",
    iataCodeArr: "TST2",
    seatCode: "TEST",
    seatClass: "TEST",
    amount: -999
  };

  constructor(private reservationService: ReservationService, private alertController: AlertController) { }

  ngOnInit() {}


  async presentAlert(isSuccess: boolean) {
    if (isSuccess) {
      const alert = await this.alertController.create({
        header: 'Success!',
        subHeader: 'Reservation cancelled',
        message: 'Your reservation has been deleted.',
        buttons: ['OK'],
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Fail',
        subHeader: 'Reservation is not cancelled',
        message: 'Your reservation has not been deleted.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }

  updateReservationsArray() {
    let helper: ReservationDTO[] = [];

    for (let i = 0; i < this.reservationService.reservations.length; i++) {
      if (this.reservationService.reservations[i].id != this.reservation.id) {
        helper.push(this.reservationService.reservations[i]);
      }
    }

    this.reservationService.reservations = helper;
  }

  cancelReservation(reservationId: number) {
    this.reservationService.cancelReservation(reservationId).subscribe(
      res => {
        this.presentAlert(res).then(
          () => {
            this.updateReservationsArray();
          }
        );
      }
    );

  }

  buyReservation(reservationId: number) {
    this.reservationService.buyReservation(reservationId).subscribe(
      res => {
        if (res) {
          this.alertController.create({
              header: 'Success!',
              subHeader: 'Reservation is purchased',
              message: 'Your reservation has been purchased.',
              buttons: ['OK']
          }).then(
            alert => {
              alert.present().then(
                () => {
                  this.updateReservationsArray();
                }
              );
            }
          );
        }
      }
    );
  }
}
