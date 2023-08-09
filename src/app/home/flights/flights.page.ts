import {Component, OnInit, ViewChild} from '@angular/core';
import {IonInput} from "@ionic/angular";
import {Flight} from "../../domain/flight";
import {NgForm} from "@angular/forms";
import {SearchParameters} from "../../domain/dto/SearchParameters";
import {FlightsService} from "./flights.service";

@Component({
  selector: 'app-flights',
  templateUrl: './flights.page.html',
  styleUrls: ['./flights.page.scss'],
})
export class FlightsPage implements OnInit {

  @ViewChild("flightsForm", {static: true}) form!: NgForm;

  public flights: Flight[] = [
    {
      id: 1,
      flightDate: new Date(),
      departureScheduled: new Date(),
      arrivalScheduled: new Date(),
      airlineName: "TEST",
      airlineImage: "...",
      airportCityDep: "BEOGRAD",
      airportCityArr: "ZAGREB",
      iataCodeDep: "BEG",
      iataCodeArr: "ZGB"
    },
    {
      id: 2,
      flightDate: new Date(),
      departureScheduled: new Date(),
      arrivalScheduled: new Date(),
      airlineName: "TEST2",
      airlineImage: "...2",
      airportCityDep: "BEOGRAD2",
      airportCityArr: "ZAGREB2",
      iataCodeDep: "BEG2",
      iataCodeArr: "ZGB2"
    },
    {
      id: 3,
      flightDate: new Date(),
      departureScheduled: new Date(),
      arrivalScheduled: new Date(),
      airlineName: "TEST3",
      airlineImage: "...3",
      airportCityDep: "BEOGRAD3",
      airportCityArr: "ZAGREB3",
      iataCodeDep: "BEG3",
      iataCodeArr: "ZGB3"
    }
  ];
  @ViewChild("calendarInput", {static: true}) calendarInput!: IonInput;
  public inputModel: string = "";

  constructor(private flightsService: FlightsService) { }

  ngOnInit() {

  }

  public onInput(e: any) {
    const value = e.target!.value;

    // /^[0-9\/]*$/
    const filteredValue = value.replace(/[^0-9\/]+/g, "");

    this.calendarInput.value = this.inputModel = filteredValue;
  }

  searchFlights() {
    let params = new SearchParameters(this.form.value["departures"], this.form.value["arrivals"], this.form.value["date"]);

    this.flightsService.searchFlights(params).subscribe((flightsData) => {
      this.flights = flightsData;
    });
  }
}
