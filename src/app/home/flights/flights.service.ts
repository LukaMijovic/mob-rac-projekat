import { Injectable } from '@angular/core';
import {SearchParameters} from "../../domain/dto/SearchParameters";
import {HttpClient} from "@angular/common/http";
import {Flight} from "../../domain/flight";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor(private http: HttpClient) { }

  searchFlights(params: SearchParameters) {
    const url = "http://localhost:8090/api/flight/v1/get/scheduled/0";
    console.log(params.cityDep + " " + params.cityArr + " " + params.timeTravel);

    return this.http.post<GetResponseFlights>(url, params).pipe(
      map((resData) => {
        console.log("Dobio odgovor!");
        return resData.embedded.flights;
      })
    );
  }

}

interface GetResponseFlights {
  embedded: {
    flights: Flight[];
  }
}
