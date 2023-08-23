import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BookingDTO} from "../../../../domain/dto/bookingDTO";
import {map} from "rxjs";
import {LogInService} from "../../../log-in/log-in.service";


@Injectable({
  providedIn: 'root'
})
export class PriceListServiceService {

  public headers: HttpHeaders = new HttpHeaders().append('Authorization', `Bearer ${LogInService.token}`);

  constructor(private http: HttpClient) { }

  chosePrice(userId: number, flightId: number, chosenClass: string) {
    const url = "http://localhost:8090/api/booking/v1/create";

    return this.http.post<GetResponse>(url, new BookingDTO(flightId, userId, chosenClass), {headers: this.headers}).pipe(
      map(resData => {
        console.log(resData);
        return resData.success;
      })
    );
  }

}

interface GetResponse {
    id: number,
    success: boolean
}
