import {Component, Input, OnInit} from '@angular/core';
import {Flight} from "../../../domain/flight";

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss'],
})
export class FlightComponent  implements OnInit {

  @Input() flight: Flight = {
    id: 9,
    flightDate: new Date(),
    departureScheduled: new Date(),
    arrivalScheduled: new Date(),
    airlineName: "TEST9",
    airlineImage: "...9",
    airportCityDep: "BEOGRAD9",
    airportCityArr: "ZAGREB9",
    iataCodeDep: "BEG9",
    iataCodeArr: "ZGB9"
  };

  constructor() { }

  ngOnInit() {}

}
