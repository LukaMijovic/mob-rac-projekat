import { Component, OnInit } from '@angular/core';
import {Flight} from "../../../domain/flight";
import {ActivatedRoute} from "@angular/router";
import {FlightsService} from "../flights.service";
import {NavController} from "@ionic/angular";
import {FlightComponent} from "../flight/flight.component";

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.page.html',
  styleUrls: ['./flight-details.page.scss'],
})
export class FlightDetailsPage implements OnInit {

  public flight: Flight = {
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
  public isLoading: boolean = false;

  constructor(private route: ActivatedRoute, private flightService: FlightsService, private navCtrl: NavController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      paramMap => {
        if (!paramMap.has('id')) {
          this.navCtrl.navigateBack("/home/flights");
          return;
        }

        this.isLoading = true;

        this.flightService.getSpecificFlight(paramMap.get('id')).subscribe(
          flight => {
            flight.departureScheduled = new Date(flight.departureScheduled);
            flight.arrivalScheduled = new Date(flight.arrivalScheduled);

            this.flight = flight;
            this.isLoading = false;
          }
        );

        this.flightService.getClassPrices(paramMap.get('id'));
      }
    )
  }

}
