import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BookingDTO} from "../../../../domain/dto/bookingDTO";
import {map} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class PriceListServiceService {

  constructor(private http: HttpClient) { }

  chosePrice(userId: number, flightId: number, chosenClass: string) {
    const url = "http://localhost:8090/api/booking/v1/create";

    return this.http.post<GetResponse>(url, new BookingDTO(flightId, userId, chosenClass)).pipe(
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
