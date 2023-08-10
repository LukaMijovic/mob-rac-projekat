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

  public flights: Flight[] = [];
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
    //console.log(this.form.value["date"]);
    this.flightsService.searchFlights(params).subscribe(flightsData => {
      console.log(new Date('2023-07-26T15:30:00'));
      console.log(new Date())
      console.log(new Date(flightsData[0].flightDate).getHours());
      // console.log(new Date().getHours());
      // console.log(flightsData[0].departureScheduled);
      // console.log((flightsData[0].departureScheduled as Date).getHours());
      flightsData.map(flight => {
        flight.departureScheduled = new Date(flight.departureScheduled);
        flight.arrivalScheduled = new Date(flight.arrivalScheduled);
      });
      this.flights = flightsData;
    });
  }
}
