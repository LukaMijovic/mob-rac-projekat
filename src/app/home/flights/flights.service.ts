import { Injectable } from '@angular/core';
import {SearchParameters} from "../../domain/dto/SearchParameters";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Flight} from "../../domain/flight";
import {map, Observable} from "rxjs";
import {PriceListDTO} from "../../domain/dto/priceListDTO";
import {LogInService} from "../log-in/log-in.service";


@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  static flightId: number;
  public headers: HttpHeaders = new HttpHeaders().append('Authorization', `Bearer ${LogInService.token}`);

  constructor(private http: HttpClient) { }

  searchFlights(params: SearchParameters): Observable<Flight[]> {
    const url = "http://localhost:8090/api/flight/v2/get/scheduled/0";
    console.log(params.cityDep + " " + params.cityArr + " " + params.timeTravel);

    // headers = headers.append('x-Flatten', 'true');
    // headers = headers.append('Content-Type', 'application/json');
    // headers = headers.append("")
    // console.log(headers.get("Authorization"))
    // console.log(headers.get("Content-Type"))

    return this.http.post<GetResponseFlights>(url, params, {headers: this.headers}).pipe(
      map((resData) => {
        console.log("Dobio odgovor!");
        console.log(resData);
        console.log(resData.content);
        return resData.content;
      })
    );
  }

  getClassPrices(flightId: string | null) {
    const url = `http://localhost:8090/api/pricelist/v1/flight/${flightId}`;

    return this.http.get<PriceListDTO>(url, {headers: this.headers}).pipe(
      map(resData => {
        return new PriceListDTO(
          resData.id,
          resData.economy,
          resData.economyPlus,
          resData.preferredEconomy,
          resData.business,
          resData.firstClass
        );
      })
    );
  }

  getSpecificFlight(id: string | null) {
    const url = `http://localhost:8090/api/flight/v1/get/${id}/scheduled`;

    return this.http.get<Flight>(url, {headers: this.headers}).pipe(
      map(resData => {

        FlightsService.flightId = resData.id;

        return new Flight(
          resData.id,
          resData.flightDate,
          resData.departureScheduled,
          resData.arrivalScheduled,
          resData.airlineName,
          resData.airlineImage,
          resData.airportCityDep,
          resData.airportCityArr,
          resData.iataCodeDep,
          resData.iataCodeArr
        );
      })
    );
  }
}

interface GetResponseFlights {
  content: Flight[];
}
