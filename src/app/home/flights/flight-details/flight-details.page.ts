import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Flight} from "../../../domain/flight";
import {ActivatedRoute, Router} from "@angular/router";
import {FlightsService} from "../flights.service";
import {ModalController, NavController} from "@ionic/angular";
import {PriceListDTO} from "../../../domain/dto/priceListDTO";
import {PriceListModalComponent} from "./price-list-modal/price-list-modal.component";

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

  public priceList: PriceListDTO = {
    id: -1,
    economy: -2,
    economyPlus: -3,
    preferredEconomy: -4,
    business: -5,
    firstClass: -6
  };

  constructor(private router: Router, private route: ActivatedRoute, private flightService: FlightsService, private navCtrl: NavController, private modalCtrl: ModalController) { }

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

            // this.flightService.getClassPrices(paramMap.get('id')).subscribe(
            //   priceList => {
            //     this.priceList = priceList;
            //   }
            // );
      }
    )
  }

  openModal() {
    this.modalCtrl.create({
      component: PriceListModalComponent
    }).then(modal => {
      modal.present();
    });
  }


}
