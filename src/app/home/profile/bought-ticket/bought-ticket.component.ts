import {Component, Input, OnInit} from '@angular/core';
import {ReservationDTO} from "../../../domain/dto/reservationDTO";

@Component({
  selector: 'app-bought-ticket',
  templateUrl: './bought-ticket.component.html',
  styleUrls: ['./bought-ticket.component.scss'],
})
export class BoughtTicketComponent  implements OnInit {

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
  constructor() { }

  ngOnInit() {}

}
